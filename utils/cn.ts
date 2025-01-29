import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional classnames
 * @param inputs - Classnames or objects with conditions
 * @returns A string of merged Tailwind classes
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
   return twMerge(clsx(inputs));
}
