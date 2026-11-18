import { SvelteComponent } from 'svelte';

export interface EarRingLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EarRingLeft extends SvelteComponent<EarRingLeftProps> {}
