import { SvelteComponent } from 'svelte';

export interface EarPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EarPulse extends SvelteComponent<EarPulseProps> {}
