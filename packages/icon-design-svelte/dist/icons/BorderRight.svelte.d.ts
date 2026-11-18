import { SvelteComponent } from 'svelte';

export interface BorderRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderRight extends SvelteComponent<BorderRightProps> {}
