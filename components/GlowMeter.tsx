'use client';

import { useMemo, useState } from 'react';

const palette = [
  { label: 'همس الفجر', note: 'نور يتسلل برفق ليوقظ الحواس.', hue: 22 },
  { label: 'عبير الذهب', note: 'اشراقة تمنح الأشياء معنى جديداً.', hue: 38 },
  { label: 'نبضة بنفسج', note: 'دفء أرجواني يمس القلب.', hue: 272 },
  { label: 'وميض نيّر', note: 'سطوع كامل يستحضر الدهشة.', hue: 200 }
];

const glowStops = [
  'rgba(234, 143, 39, 0.95)',
  'rgba(124, 58, 237, 0.85)',
  'rgba(59, 130, 246, 0.75)'
];

export function GlowMeter() {
  const [level, setLevel] = useState(62);

  const mood = useMemo(() => {
    const segment = Math.min(
      palette.length - 1,
      Math.floor((level / 100) * palette.length)
    );

    return palette[segment];
  }, [level]);

  const gradient = useMemo(() => {
    const falloff = level / 100;
    const stops = glowStops
      .map((stop, index) => {
        const opacity = Math.max(0.28, (1 - index * 0.25) * falloff);
        return stop.replace(/\d\.\d+\)$/, `${opacity})`);
      })
      .join(', ');

    return `radial-gradient(circle at 50% 40%, ${stops})`;
  }, [level]);

  return (
    <section className="glass rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-900/40 ring-1 ring-white/5">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 space-y-3">
          <p className="text-sm uppercase tracking-widest text-aurora-400 font-latin">
            ALIF TO NOON
          </p>
          <h2 className="text-3xl font-display text-white md:text-4xl">
            عدسة النور
          </h2>
          <p className="text-lg text-aurora-200 leading-relaxed">
            حرّك مستوى الإشراق لترى كيف تتبدّل نبضات الكلمة بين دفء
            الفجر ولمعان السماء.
          </p>
        </div>
        <div
          className="relative flex h-48 w-full flex-col justify-between overflow-hidden rounded-2xl p-6 md:w-64"
          style={{ backgroundImage: gradient }}
        >
          <span className="text-sm text-aurora-100/80">لمعة الآن</span>
          <div>
            <p className="text-4xl font-display">{mood.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-aurora-100/80">
              {mood.note}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-3">
        <input
          type="range"
          min={0}
          max={100}
          value={level}
          onChange={(event) => setLevel(Number(event.target.value))}
          className="w-full accent-purple-500"
        />
        <div className="flex justify-between text-sm text-aurora-300">
          <span>خفوت</span>
          <span>{level}%</span>
          <span>توهّج</span>
        </div>
      </div>
    </section>
  );
}
