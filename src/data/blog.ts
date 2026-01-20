export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
  image: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  content: string;
}

export const categories = [
  { id: "all", label: "All", color: "var(--soft-purple)" },
  { id: "tech", label: "Tech", color: "var(--mint-green)" },
  { id: "design", label: "Design", color: "var(--dusty-pink)" },
  { id: "retro", label: "Retro", color: "var(--peach)" },
  { id: "tutorial", label: "Tutorial", color: "var(--lavender)" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-low-poly-3d-characters",
    title: "Building Low-Poly 3D Characters for the Web",
    excerpt:
      "Learn how to create PS1-style low-poly characters using Three.js and React Three Fiber. A complete guide from modeling to rendering.",
    date: "2026-01-15",
    category: "tutorial",
    readingTime: 8,
    image: "/images/blog-1.webp",
    tags: ["Three.js", "3D", "WebGL"],
    author: {
      name: "Portfolio Author",
      avatar: "/images/avatar.webp",
    },
    content: `
## Introduction

Welcome to this comprehensive guide on creating **PS1-style low-poly characters** for the web using Three.js and React Three Fiber. The nostalgic aesthetic of early 3D games has made a huge comeback, and there's something magical about those chunky polygons.

## Why Low-Poly?

Low-poly art isn't just about nostalgia—it's also incredibly performant. Here are some benefits:

- **Fast loading times**: Fewer polygons mean smaller file sizes
- **Better mobile performance**: Less GPU strain
- **Unique aesthetic**: Stand out from the crowd
- **Easier to create**: You don't need to be a 3D artist

## Setting Up Three.js

First, let's set up our Three.js scene with React Three Fiber:

\`\`\`javascript
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <LowPolyCharacter />
      <OrbitControls />
    </Canvas>
  );
}
\`\`\`

## Creating the Character

The key to achieving that PS1 look is using \`flatShading\` on your materials:

\`\`\`javascript
const material = new THREE.MeshLambertMaterial({
  color: 0xB5A8D4, // soft purple
  flatShading: true
});
\`\`\`

## Tips for PS1 Aesthetic

1. Keep polygon count between 500-2000
2. Use flat shading exclusively
3. Avoid smooth gradients
4. Add subtle vertex wobble for authenticity

## Conclusion

With these techniques, you can create beautiful retro-style 3D characters that run smoothly on any device. Happy modeling!
    `,
  },
  {
    id: 2,
    slug: "pastel-retro-design-aesthetic",
    title: "The Aesthetic of Pastel Retro Design",
    excerpt:
      "Exploring the Memphis design movement and how to incorporate pastel color palettes into modern web interfaces.",
    date: "2026-01-10",
    category: "design",
    readingTime: 5,
    image: "/images/blog-2.webp",
    tags: ["Design", "UI/UX", "Colors"],
    author: {
      name: "Portfolio Author",
      avatar: "/images/avatar.webp",
    },
    content: `
## The Memphis Movement

The **Memphis Group**, founded in Milan in 1981, revolutionized design with bold geometric patterns and unconventional color combinations. Today, we're seeing a revival of these principles in web design.

## Building a Pastel Palette

A good pastel palette needs balance. Here's what I use:

\`\`\`css
:root {
  --soft-purple: #B5A8D4;
  --mint-green: #B8E6D5;
  --dusty-pink: #E8AEB7;
  --peach: #FFD4A3;
  --cream: #F5F1E8;
}
\`\`\`

## Key Design Principles

### 1. Chunky UI Elements

Give your buttons and cards physical presence with **3D-style shadows**:

\`\`\`css
.button {
  box-shadow: 0 4px 0 var(--dark-purple);
  transform: translateY(-2px);
}

.button:active {
  box-shadow: 0 2px 0 var(--dark-purple);
  transform: translateY(0);
}
\`\`\`

### 2. Geometric Decorations

Scatter shapes throughout your design—circles, triangles, and zigzags add playfulness without overwhelming the content.

### 3. Typography Matters

Pair a bold display font like **Bungee** with a readable monospace like **Source Code Pro** for that perfect retro-modern balance.

## Conclusion

Pastel retro isn't just a trend—it's a celebration of design history that brings joy to digital experiences.
    `,
  },
  {
    id: 3,
    slug: "optimizing-threejs-performance-mobile",
    title: "Optimizing Three.js Performance on Mobile",
    excerpt:
      "Tips and tricks for achieving smooth 60fps on mobile devices with complex 3D scenes and animations.",
    date: "2026-01-05",
    category: "tech",
    readingTime: 12,
    image: "/images/blog-3.webp",
    tags: ["Performance", "Mobile", "Three.js"],
    author: {
      name: "Portfolio Author",
      avatar: "/images/avatar.webp",
    },
    content: `
## The Mobile Challenge

Mobile devices have limited GPU power compared to desktops. Here's how to keep your Three.js scenes running smoothly.

## Key Optimization Strategies

### 1. Reduce Polygon Count

Use Level of Detail (LOD) to swap models based on distance:

\`\`\`javascript
import { LOD } from 'three';

const lod = new LOD();
lod.addLevel(highPolyMesh, 0);
lod.addLevel(mediumPolyMesh, 50);
lod.addLevel(lowPolyMesh, 100);
\`\`\`

### 2. Use BufferGeometry

Always prefer \`BufferGeometry\` over the deprecated \`Geometry\`:

\`\`\`javascript
const geometry = new THREE.BufferGeometry();
// Much faster than regular Geometry
\`\`\`

### 3. Optimize Textures

- Use power-of-two dimensions (512x512, 1024x1024)
- Compress textures to WebP or KTX2
- Implement lazy loading for off-screen assets

### 4. Limit Draw Calls

Merge geometries when possible and use instancing for repeated objects:

\`\`\`javascript
const instancedMesh = new THREE.InstancedMesh(
  geometry,
  material,
  count
);
\`\`\`

## Performance Monitoring

Use the built-in stats panel:

\`\`\`javascript
import Stats from 'three/examples/jsm/libs/stats.module';

const stats = new Stats();
document.body.appendChild(stats.dom);
\`\`\`

## Target Metrics

- Desktop: 60 FPS
- Mobile: 30-60 FPS
- Initial load: < 3 seconds

With these optimizations, your 3D experiences will run beautifully on any device!
    `,
  },
  {
    id: 4,
    slug: "ps1-graphics-era-nostalgia",
    title: "Why I Love the PS1 Graphics Era",
    excerpt:
      "A nostalgic look back at the PlayStation 1 era graphics and why low-poly aesthetics are making a comeback.",
    date: "2025-12-28",
    category: "retro",
    readingTime: 6,
    image: "/images/blog-4.webp",
    tags: ["Retro", "Gaming", "Nostalgia"],
    author: {
      name: "Portfolio Author",
      avatar: "/images/avatar.webp",
    },
    content: `
## A Love Letter to Low-Poly

There's something magical about **PlayStation 1 era graphics**. The wobbly vertices, the affine texture mapping, the chunky polygons—they weren't limitations, they were *character*.

## Why PS1 Graphics Hit Different

### The Uncanny Valley Doesn't Exist

Modern graphics strive for photorealism but often fall into the uncanny valley. PS1 games never had this problem—they were stylized from the start.

### Imagination Fills the Gaps

When you played Final Fantasy VII, your brain filled in the details those blocky characters couldn't show. It was collaborative storytelling between you and the game.

### Technical Constraints Bred Creativity

Developers had to be incredibly creative to convey emotion and atmosphere with limited polygons. This led to:

- Expressive character animations
- Clever use of pre-rendered backgrounds
- Atmospheric lighting tricks

## The Modern Revival

Games like:

- **Paleo Pines** - Cozy dinosaur farming
- **Crow Country** - Survival horror
- **Signalis** - Sci-fi horror

These prove that PS1 aesthetics aren't just nostalgia—they're a legitimate artistic choice.

## Bringing It to the Web

With Three.js, we can recreate this aesthetic:

\`\`\`javascript
material.flatShading = true;
// Instant PS1 vibes
\`\`\`

The lo-fi revolution is here, and I'm here for it.
    `,
  },
  {
    id: 5,
    slug: "smooth-scroll-animations-intersection-observer",
    title: "Creating Smooth Scroll Animations with Intersection Observer",
    excerpt:
      "A step-by-step tutorial on implementing performant scroll-triggered animations without heavy libraries.",
    date: "2025-12-20",
    category: "tutorial",
    readingTime: 10,
    image: "/images/blog-5.webp",
    tags: ["JavaScript", "Animation", "Tutorial"],
    author: {
      name: "Portfolio Author",
      avatar: "/images/avatar.webp",
    },
    content: `
## Why Intersection Observer?

Scroll-triggered animations are beautiful, but libraries like ScrollMagic can be heavy. The native **Intersection Observer API** gives us the same power with zero dependencies.

## Basic Setup

First, let's create our observer:

\`\`\`javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  },
  { threshold: 0.1 }
);
\`\`\`

## The CSS

Define your animation states:

\`\`\`css
.animate-target {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-target.animate-in {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`

## Staggered Animations

For multiple elements, add delays:

\`\`\`javascript
document.querySelectorAll('.animate-target').forEach((el, i) => {
  el.style.transitionDelay = \`\${i * 100}ms\`;
  observer.observe(el);
});
\`\`\`

## React Implementation

In React, use a custom hook:

\`\`\`javascript
function useIntersectionObserver(ref, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}
\`\`\`

## Performance Tips

- Use \`threshold: 0.1\` for early triggers
- Unobserve after animation completes
- Use CSS transforms (not position) for smooth 60fps

Happy animating!
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getCategoryColor(categoryId: string): string {
  const category = categories.find((c) => c.id === categoryId);
  return category?.color || "var(--soft-purple)";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
