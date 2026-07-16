import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge conditional class names and resolve Tailwind conflicts.
 * The single helper every component uses so variants stay predictable.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
