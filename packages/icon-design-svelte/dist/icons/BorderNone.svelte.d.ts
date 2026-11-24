import { SvelteComponent } from 'svelte';

export interface BorderNoneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderNone extends SvelteComponent<BorderNoneProps> {}
