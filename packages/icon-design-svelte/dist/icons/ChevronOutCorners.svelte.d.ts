import { SvelteComponent } from 'svelte';

export interface ChevronOutCornersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronOutCorners extends SvelteComponent<ChevronOutCornersProps> {}
