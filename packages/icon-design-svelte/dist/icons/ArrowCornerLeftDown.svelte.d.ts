import { SvelteComponent } from 'svelte';

export interface ArrowCornerLeftDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCornerLeftDown extends SvelteComponent<ArrowCornerLeftDownProps> {}
