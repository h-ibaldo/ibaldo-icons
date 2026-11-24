import { SvelteComponent } from 'svelte';

export interface DiagramDecisionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiagramDecision extends SvelteComponent<DiagramDecisionProps> {}
