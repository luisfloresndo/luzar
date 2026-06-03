import { Timeline } from "@/components/ui/timeline";
import { PROCESS } from "@/lib/content";

export function Process() {
  const data = PROCESS.map((s) => ({
    title: s.step,
    content: (
      <div>
        <h4 className="font-display text-2xl font-semibold text-navy md:text-3xl">
          {s.title}
        </h4>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
          {s.body}
        </p>
      </div>
    ),
  }));

  return (
    <section id="proceso">
      <Timeline
        data={data}
        heading="Un proceso claro, de principio a fin."
        subheading="Sin sorpresas ni letras chiquitas: sabes qué sigue en cada paso."
      />
    </section>
  );
}
