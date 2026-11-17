import { SvelteComponent } from 'svelte';

export interface BellSquareDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellSquareDash extends SvelteComponent<BellSquareDashProps> {}
