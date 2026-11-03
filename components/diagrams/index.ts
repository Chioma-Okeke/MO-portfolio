import type { ComponentType } from "react"
import { LaundryArchitecture } from "./laundry-architecture"

// Hand-drawn architecture diagrams, keyed by project slug.
// A project listed here shows its diagram instead of `architecture.diagram`.
export const diagrams: Record<string, ComponentType<{ className?: string }>> = {
  "laundry-inventory": LaundryArchitecture,
}
