export function SectionHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
        {title}
      </h2>
      {meta && <span className="text-[10px] font-mono text-border">{meta}</span>}
    </div>
  );
}
