import Image from "next/image";
import Link from "next/link";
import {
  getBlogPost,
  formatDate,
  getCategoryColor,
  categories,
  getAllSlugs,
} from "@/data/blog";
import ShareButtons from "@/components/ShareButtons";

// Static export için tüm blog slug'larını generate et
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug: slug,
  }));
}

function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLanguage = "";
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
        codeLines = [];
      } else {
        elements.push(
          <pre
            key={key++}
            className="rounded-xl p-4 lg:p-6 my-6 overflow-x-auto font-body text-sm lg:text-base"
            style={{
              backgroundColor: "var(--butter-yellow)",
              border: "3px solid var(--peach)",
              boxShadow: "4px 4px 0 var(--peach)",
            }}
          >
            <code style={{ color: "var(--dark-gray)" }}>
              {codeLines.join("\n")}
            </code>
          </pre>
        );
        inCodeBlock = false;
        codeLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-heading text-xl lg:text-2xl mt-10 mb-4"
          style={{
            color: "var(--dark-purple)",
            textShadow: "1px 1px 0 var(--lavender)",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="font-heading text-lg lg:text-xl mt-8 mb-3"
          style={{ color: "var(--dark-purple)" }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li
          key={key++}
          className="font-body ml-6 mb-2"
          style={{ color: "var(--dark-gray)", listStyleType: "disc" }}
        >
          {parseInlineMarkdown(line.slice(2))}
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const match = line.match(/^(\d+)\.\s(.*)$/);
      if (match) {
        elements.push(
          <li
            key={key++}
            className="font-body ml-6 mb-2"
            style={{ color: "var(--dark-gray)", listStyleType: "decimal" }}
          >
            {parseInlineMarkdown(match[2])}
          </li>
        );
      }
    } else if (line.trim() === "") {
      elements.push(<br key={key++} />);
    } else {
      elements.push(
        <p
          key={key++}
          className="font-body mb-4 leading-relaxed"
          style={{ color: "var(--dark-gray)", lineHeight: 1.8 }}
        >
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  }

  return elements;
}

function parseInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    let firstMatch: { type: "bold" | "code"; index: number; match: RegExpMatchArray } | null = null;

    if (boldMatch && boldMatch.index !== undefined) {
      firstMatch = { type: "bold", index: boldMatch.index, match: boldMatch };
    }
    if (codeMatch && codeMatch.index !== undefined) {
      if (!firstMatch || codeMatch.index < firstMatch.index) {
        firstMatch = { type: "code", index: codeMatch.index, match: codeMatch };
      }
    }

    if (!firstMatch) {
      parts.push(remaining);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(remaining.slice(0, firstMatch.index));
    }

    if (firstMatch.type === "bold") {
      parts.push(
        <strong key={key++} style={{ color: "var(--dark-purple)" }}>
          {firstMatch.match[1]}
        </strong>
      );
    } else {
      parts.push(
        <code
          key={key++}
          className="px-2 py-0.5 rounded font-body text-sm"
          style={{
            backgroundColor: "var(--lavender)",
            color: "var(--dark-purple)",
          }}
        >
          {firstMatch.match[1]}
        </code>
      );
    }

    remaining = remaining.slice(firstMatch.index + firstMatch.match[0].length);
  }

  return parts.length === 1 ? parts[0] : parts;
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <div className="text-center">
          <h1
            className="font-heading text-3xl mb-4"
            style={{ color: "var(--dark-purple)" }}
          >
            Post Not Found
          </h1>
          <Link
            href="/#blog"
            className="font-body px-6 py-3 rounded-lg inline-block transition-all duration-200"
            style={{
              backgroundColor: "var(--soft-purple)",
              color: "white",
              border: "3px solid var(--dark-purple)",
              boxShadow: "0 4px 0 var(--dark-purple)",
            }}
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const categoryColor = getCategoryColor(post.category);
  const categoryLabel =
    categories.find((c) => c.id === post.category)?.label || post.category;

  return (
    <main
      className="min-h-screen pt-20 pb-16"
      style={{ backgroundColor: "var(--cream)" }}
    >
      {/* Memphis Geometric Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-32 right-8 w-24 h-24 rounded-full opacity-10"
          style={{ backgroundColor: "var(--mint-green)" }}
        />
        <div
          className="absolute bottom-32 left-8 w-16 h-16 opacity-10 rotate-45"
          style={{ backgroundColor: "var(--dusty-pink)" }}
        />
        <div
          className="absolute top-1/3 left-4 w-0 h-0 opacity-10"
          style={{
            borderLeft: "30px solid transparent",
            borderRight: "30px solid transparent",
            borderBottom: "52px solid var(--peach)",
          }}
        />
      </div>

      <article className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 font-body text-sm mb-8 transition-colors duration-200"
          style={{ color: "var(--dark-purple)" }}
        >
          <span>←</span>
          <span>Back to Blog</span>
        </Link>

        {/* Hero Image */}
        <div
          className="relative aspect-video rounded-2xl overflow-hidden mb-8"
          style={{
            border: "4px solid var(--dark-purple)",
            boxShadow: "6px 6px 0 var(--lavender)",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          {/* Placeholder overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${categoryColor} 0%, var(--cream) 100%)`,
            }}
          >
            <span className="text-7xl">📝</span>
          </div>
        </div>

        {/* Category Badge */}
        <div
          className="inline-block px-4 py-1 rounded-full font-body text-sm font-medium mb-4"
          style={{
            backgroundColor: categoryColor,
            color: "var(--dark-purple)",
            border: "2px solid var(--dark-purple)",
          }}
        >
          {categoryLabel}
        </div>

        {/* Title */}
        <h1
          className="font-heading text-3xl lg:text-5xl mb-6"
          style={{
            color: "var(--dark-purple)",
            textShadow: "2px 2px 0 var(--lavender)",
          }}
        >
          {post.title}
        </h1>

        {/* Author & Meta */}
        <div
          className="flex flex-wrap items-center gap-4 mb-8 pb-8"
          style={{ borderBottom: "3px dashed var(--soft-purple)" }}
        >
          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: "var(--soft-purple)",
                border: "2px solid var(--dark-purple)",
              }}
            >
              <span className="text-xl">👤</span>
            </div>
            <div>
              <p
                className="font-body font-medium"
                style={{ color: "var(--dark-purple)" }}
              >
                {post.author.name}
              </p>
              <p className="font-body text-sm" style={{ color: "var(--dark-gray)" }}>
                {formatDate(post.date)}
              </p>
            </div>
          </div>

          {/* Reading Time */}
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full font-body text-sm"
            style={{
              backgroundColor: "var(--light-gray)",
              color: "var(--dark-gray)",
            }}
          >
            <span>📖</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-pastel">{parseMarkdown(post.content)}</div>

        {/* Tags */}
        <div
          className="flex flex-wrap gap-2 mt-10 pt-8"
          style={{ borderTop: "3px dashed var(--soft-purple)" }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full font-body text-sm"
              style={{
                backgroundColor: "var(--light-gray)",
                color: "var(--dark-purple)",
                border: "2px solid var(--soft-purple)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Buttons */}
        <ShareButtons url={`https://umutcanceyhan7.github.io/blog/${slug}`} title={post.title} />
      </article>
    </main>
  );
}
