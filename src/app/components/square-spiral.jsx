"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";

const SquareSpiral = () => {

    useEffect(() => {
        const timeline = gsap.timeline({
            repeat: -1,
        })

        timeline
            .set("svg.spiral rect", {
                rotation: 0,
                transformOrigin: "50% 50%",
            })
            .set("svg.spiral rect:nth-child(1)", {
                rotation: 15,
            })
            .set("svg.spiral rect:nth-child(3)", {
                rotation: -15,
            })
            .to("svg.spiral rect", {
                rotation: "+=90", 
                transformOrigin: "50% 50%",
                duration: 4,
                stagger: -0.25
            })
            

    }, [])

  return (
    <section className="shift-section">
      <svg
        width="544"
        height="544"
        viewBox="0 0 544 544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="spiral"
      >
        <rect
          x="18.4778"
          y="125.629"
          width="414"
          height="414"
          transform="rotate(-15 18.4778 125.629)"
          stroke="black"
          stroke-width="2"
        />
        <rect
          x="129"
          y="129"
          width="289"
          height="289"
          stroke="black"
          stroke-width="2"
        />
        <rect
          x="216.139"
          y="175.245"
          width="158"
          height="158"
          transform="rotate(15 216.139 175.245)"
          stroke="black"
          stroke-width="2"
        />
        <rect
          x="257"
          y="257"
          width="30"
          height="30"
          stroke="black"
          stroke-width="2"
        />
      </svg>
    </section>
  );
};

export default SquareSpiral;
