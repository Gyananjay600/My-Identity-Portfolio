/**
 * Standard utility function for merging class names (Shadcn UI pattern)
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

