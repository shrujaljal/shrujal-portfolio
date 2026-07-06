"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function RibbonBackground() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.12, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.12, 0.2, 0.16, 0.08]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute left-1/2 top-0 h-[430vh] w-[132vw] -translate-x-1/2" viewBox="0 0 1320 4300" fill="none">
        <motion.path
          d="M820 10C690 190 522 282 540 462C567 732 1000 724 1008 1010C1016 1302 520 1294 476 1600C428 1936 956 1968 910 2324C870 2638 426 2678 476 3002C526 3328 958 3358 870 3676C812 3884 664 4036 690 4290"
          stroke="#b56f55"
          strokeWidth="2.2"
          strokeLinecap="round"
          style={shouldReduceMotion ? { opacity: 0.3 } : { pathLength, opacity }}
        />
        <motion.path
          d="M760 80C610 262 742 430 870 548C1062 724 990 946 716 1086C474 1210 430 1408 628 1594C886 1836 1016 2064 792 2334C584 2586 506 2782 710 2998C966 3270 1032 3504 794 3780C672 3922 612 4108 648 4270"
          stroke="#8f9a78"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={shouldReduceMotion ? { opacity: 0.18 } : { pathLength, opacity }}
        />
        <motion.path
          d="M712 0C730 364 386 520 440 796C502 1116 876 1114 884 1392C892 1672 548 1804 600 2098C658 2426 1012 2518 928 2814C850 3090 556 3190 618 3496C670 3756 858 3886 802 4300"
          stroke="#c49b5e"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="9 18"
          style={shouldReduceMotion ? { opacity: 0.12 } : { pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
