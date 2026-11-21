import { SvelteComponent } from 'svelte';

export interface BrainCircuitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrainCircuit extends SvelteComponent<BrainCircuitProps> {}
