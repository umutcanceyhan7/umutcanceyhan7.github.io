"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "mint" | "plain" | "danger";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--soft-purple)] text-white",
  mint: "bg-[var(--mint-green)] text-[var(--dark-purple)]",
  plain: "bg-white text-[var(--dark-purple)]",
  danger: "bg-[var(--dusty-pink)] text-[var(--dark-purple)]",
};

export function Btn({
  variant = "plain",
  small,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; small?: boolean }) {
  return (
    <button
      {...rest}
      className={`font-heading uppercase tracking-wide rounded-lg border-2 border-[var(--dark-purple)]
        shadow-[0_3px_0_var(--dark-purple)] active:translate-y-[3px] active:shadow-none
        transition-[transform,box-shadow] disabled:opacity-50 disabled:pointer-events-none
        ${small ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"} ${variants[variant]} ${className}`}
    />
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-xl border-[3px] border-[var(--dark-purple)] shadow-[4px_4px_0_var(--dark-purple)] ${className}`}
    >
      {children}
    </div>
  );
}

export const inputClass =
  "w-full min-w-0 rounded-lg border-2 border-[var(--dark-purple)] bg-[var(--cream)] px-3 py-2.5 text-base " +
  "text-[var(--dark-gray)] placeholder:text-[#8a8a8a] focus:outline-none focus:ring-4 focus:ring-[var(--lavender)]";

export function Confirm({
  text,
  busy,
  onYes,
  onNo,
}: {
  text: ReactNode;
  busy?: boolean;
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onNo}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm">
        <Card className="p-5">
          <p className="font-heading text-lg text-[var(--dark-purple)] mb-2">Emin misin?</p>
          <p className="mb-5">{text}</p>
          <div className="flex justify-end gap-3">
            <Btn onClick={onNo} disabled={busy}>Vazgeç</Btn>
            <Btn variant="danger" onClick={onYes} disabled={busy}>
              {busy ? "Siliniyor…" : "Evet, sil"}
            </Btn>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function ErrorNote({ children }: { children: ReactNode }) {
  return (
    <p role="alert" className="rounded-lg border-2 border-[var(--coral)] bg-[#fff0f0] px-3 py-2 text-sm text-[#a33]">
      {children}
    </p>
  );
}
