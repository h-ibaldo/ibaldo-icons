import { SvelteComponent } from 'svelte';

export interface SprayCanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SprayCan extends SvelteComponent<SprayCanProps> {}
