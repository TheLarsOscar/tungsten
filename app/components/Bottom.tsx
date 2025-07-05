'use client';

export default function Bottom({ className = '' }: { className?: string }) {
  return (
    <section className={`w-full h-story-to-breaker bg-[url('/images/bg-metal-footer.png')] bg-cover bg-center ${className}`.trim()} />
  );
}