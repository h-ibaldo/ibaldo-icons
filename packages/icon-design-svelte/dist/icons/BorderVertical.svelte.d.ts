import { SvelteComponent } from 'svelte';

export interface BorderVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderVertical extends SvelteComponent<BorderVerticalProps> {}
