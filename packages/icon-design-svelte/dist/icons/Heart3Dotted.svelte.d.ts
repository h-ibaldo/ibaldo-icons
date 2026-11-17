import { SvelteComponent } from 'svelte';

export interface Heart3DottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart3Dotted extends SvelteComponent<Heart3DottedProps> {}
