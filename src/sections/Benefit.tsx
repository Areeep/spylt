import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";

export default function Benefit() {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        markers: true,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages: <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>
          <div className="col-center mt-20">
            <ClipPathTitle
              title="Shelf stable"
              color="#faedae"
              bg="#c88e64"
              className="first-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Protein + Caffeine"
              color="#222123"
              bg="#faedae"
              className="second-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Infinitely recycleable"
              color="#faedae"
              bg="#7f382d"
              className="third-title"
              borderColor="#222123"
            />
            <ClipPathTitle
              title="Lactose Free"
              color="#2e2d2f"
              bg="#fed775"
              className="fourth-title"
              borderColor="#222123"
            />
          </div>

          <div className="mt-10 md:mt-0">
            <p>And much more...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
