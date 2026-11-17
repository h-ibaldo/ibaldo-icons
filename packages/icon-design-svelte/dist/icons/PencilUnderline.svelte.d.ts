import { SvelteComponent } from 'svelte';

export interface PencilUnderlineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderline extends SvelteComponent<PencilUnderlineProps> {}
