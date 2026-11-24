import { SvelteComponent } from 'svelte';

export interface AtCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCorners extends SvelteComponent<AtCornersProps> {}
