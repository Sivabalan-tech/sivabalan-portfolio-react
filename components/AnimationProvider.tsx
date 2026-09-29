"use client";

import type { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";

export default function AnimationProvider({ children }: PropsWithChildren) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
