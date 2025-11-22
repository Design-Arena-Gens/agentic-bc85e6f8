'use client';

import { useEffect, useState } from 'react';

const verses = [
  {
    title: 'متحف الضوء',
    text: 'كل حرف يلمع حين يُكتب بمحبة. النور يبدأ من النية ثم يسكن المعنى.',
    source: 'دفاتر الصباح'
  },
  {
    title: 'نبض القصيدة',
    text: 'إذا أشرقت الكلمة اتسعت السماء داخلنا، وصار الصمت نجمة أخرى.',
    source: 'دفق الحروف'
  },
  {
    title: 'جسر الحكاية',
    text: 'نحمل في ألسنتنا مصابيح للآخرين، فالكلمة اللطيفة لا تنطفئ.',
    source: 'سفر المسك'
  },
  {
    title: 'بصمة الخيال',
    text: 'النور الذي نرسله يعود لنا بهيئة دفء، فاغرس سطراً يزهر ضياء.',
    source: 'مقام الأماني'
  }
];

export function VerseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const current = verses[index];

  return (
    <section className="glass overflow-hidden rounded-3xl p-8 md:p-10 ring-1 ring-purple-500/15">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="relative flex-1 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/20 bg-purple-500/10 px-3 py-1 text-xs font-latin uppercase tracking-[0.3em] text-purple-200/80">
            Lightlines
          </span>
          <h3 className="text-3xl font-display text-white md:text-4xl">
            {current.title}
          </h3>
          <p className="text-xl leading-relaxed text-aurora-100">
            {current.text}
          </p>
          <p className="text-sm text-aurora-400">— {current.source}</p>
        </div>
        <div className="flex w-full flex-row gap-3 md:w-24 md:flex-col">
          {verses.map((verse, idx) => (
            <button
              key={verse.title}
              onClick={() => setIndex(idx)}
              className={`flex-1 rounded-full transition ${
                idx === index
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-500/15 text-purple-100/60 hover:bg-purple-500/25'
              } px-4 py-2 text-sm font-medium`}
              aria-label={`انتقال إلى ${verse.title}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
