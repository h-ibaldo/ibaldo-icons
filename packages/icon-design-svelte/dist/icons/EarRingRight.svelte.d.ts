import { SvelteComponent } from 'svelte';

export interface EarRingRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EarRingRight extends SvelteComponent<EarRingRightProps> {}
