import { LuminousMosaic } from '@/components/LuminousMosaic';
import { GlowMeter } from '@/components/GlowMeter';
import { VerseCarousel } from '@/components/VerseCarousel';

const manifesto = [
  {
    heading: 'نبض الحرف',
    detail: 'نؤمن بأن كل كلمة تحمل ضوءًا صغيرًا يكمل فسيفساء إنسانيتنا.'
  },
  {
    heading: 'لغة تتنفس',
    detail: 'نحتفي بالأصالة والمعاصرة معًا؛ نستلهم من التراث لنكتب المستقبل.'
  },
  {
    heading: 'أثر لا يخبو',
    detail: 'صوتك أنقى حين يتشح بالرفق، وكلماتك أكثر دواماً حين تضيء.'
  }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-16 bg-radial-glow px-6 pb-24 pt-24 md:px-10">
      <header className="mx-auto max-w-5xl">
        <div className="glass relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-400/40 blur-3xl" />
          <div className="relative space-y-6 text-center">
            <p className="text-sm font-latin uppercase tracking-[0.4em] text-aurora-200">
              Kalimat Noor
            </p>
            <h1 className="text-5xl font-display leading-tight text-white md:text-7xl">
              كلمة نور
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-aurora-100 md:text-2xl">
              مساحة تُنير الدهشة في اللغة العربية، وتفتح نوافذ على حكايات
              تُكتب بالضوء والرفق.
            </p>
            <div className="glimmer mx-auto inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-aurora-100 backdrop-blur">
              <span className="font-latin uppercase tracking-[0.35em] text-purple-200">
                Beam
              </span>
              <span className="font-display text-lg text-white">
                الكلمة التي تضيء تجهز طريقاً لغيرها.
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <GlowMeter />
        <VerseCarousel />
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-latin uppercase tracking-[0.45em] text-aurora-300">
            Manifesto
          </p>
          <h2 className="text-4xl font-display text-white md:text-5xl">
            صدى الضوء في ثلاثة مسارات
          </h2>
          <p className="text-lg text-aurora-200 md:text-xl">
            لأن الكلمة الطيبة عناق متدرج بين المعنى والقلب، نرسم لها مساراً
            من ثلاثة نبضات.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {manifesto.map((item) => (
            <div
              key={item.heading}
              className="glass flex flex-col gap-4 rounded-3xl p-6 text-right ring-1 ring-white/10"
            >
              <h3 className="text-2xl font-display text-white">
                {item.heading}
              </h3>
              <p className="text-base leading-relaxed text-aurora-100">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-latin uppercase tracking-[0.45em] text-aurora-300">
            Luminous Threads
          </p>
          <h2 className="text-4xl font-display text-white md:text-5xl">
            فسيفساء الحكايات
          </h2>
          <p className="text-lg text-aurora-200 md:text-xl">
            لوّن مسار الضوء بقطع متناثرة من الأمل والتأمل.
          </p>
        </div>
        <LuminousMosaic />
      </section>

      <footer className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-aurora-400">
        <p className="font-display text-2xl text-white">
          حيث تمتد الكلمة فتضيء.
        </p>
        <p className="max-w-xl text-sm leading-relaxed">
          كُن ضوءًا صغيرًا في حياة من حولك. اكتب بحب، وأنصت بصدق، وامنح لسانك
          فرصة لصناعة آفاق أكثر إشراقًا.
        </p>
        <div className="flex items-center gap-3 text-xs font-latin uppercase tracking-[0.4em] text-aurora-500">
          <span>MADE WITH CARE</span>
          <span className="h-1 w-1 rounded-full bg-aurora-500" />
          <span>كلمة نور</span>
        </div>
      </footer>
    </main>
  );
}
