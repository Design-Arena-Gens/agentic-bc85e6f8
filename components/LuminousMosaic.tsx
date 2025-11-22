'use client';

const fragments = [
  {
    title: 'نقطة البدء',
    body: 'حيث تتلاقى البسملة مع نبض القلب لتعلن بداية حكاة جديدة.',
    accent: 'bg-gradient-to-br from-pulse-300/70 to-purple-600/40'
  },
  {
    title: 'صدى الألوان',
    body: 'لون واحد لا يكفي لاحتضان النور، لذلك نرسم القصص بأطياف متعددة.',
    accent: 'bg-gradient-to-br from-dawn-300/70 to-dawn-500/40'
  },
  {
    title: 'مرآة الروح',
    body: 'الكلمة الصادقة تلمع كالنجمة، تراها في عيون من يقرأها.',
    accent: 'bg-gradient-to-br from-emerald-200/60 to-emerald-500/30'
  },
  {
    title: 'وعد الغد',
    body: 'نكتب اليوم لنبني غداً رقراقاً، نترك للأمل مرآته المشرقة.',
    accent: 'bg-gradient-to-br from-sky-300/60 to-indigo-600/30'
  }
];

export function LuminousMosaic() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {fragments.map((fragment) => (
        <div
          key={fragment.title}
          className={`group relative overflow-hidden rounded-3xl border border-white/10 ${fragment.accent} p-[1px]`}
        >
          <div className="glass relative h-full rounded-[calc(1.5rem-1px)] p-6 transition duration-300 group-hover:translate-y-[-4px] group-hover:shadow-xl group-hover:shadow-purple-900/40">
            <h4 className="font-display text-2xl text-white">
              {fragment.title}
            </h4>
            <p className="mt-4 text-base leading-relaxed text-aurora-100">
              {fragment.body}
            </p>
            <div className="pointer-events-none absolute -right-10 top-10 h-24 w-24 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:opacity-70" />
          </div>
        </div>
      ))}
    </div>
  );
}
