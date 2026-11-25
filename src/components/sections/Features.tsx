import { CookingPot, Leaf, MessageCircle, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/site";

const icons = {
  tradition: CookingPot,
  cassava: Leaf,
  moment: Users,
  whatsapp: MessageCircle,
} as const;

export function Features() {
  return (
    <section
      aria-labelledby="keunggulan-title"
      className="bg-rose-100/70 py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="keunggulan-title"
            align="center"
            eyebrow="Keunggulan"
            title="Kenapa Pilih Tukkie?"
            lead="Camilan tradisional yang sederhana, dengan pengalaman memesan yang tidak ribet."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal
                key={benefit.title}
                delay={index * 80}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-card bg-cream-50 p-6 shadow-soft ring-1 ring-plum-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-plum-600/10 text-plum-600 transition-colors duration-300 group-hover:bg-plum-600 group-hover:text-cream-50">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-plum-800">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-700/85">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
