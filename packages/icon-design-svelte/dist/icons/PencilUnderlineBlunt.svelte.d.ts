import { SvelteComponent } from 'svelte';

export interface PencilUnderlineBluntProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderlineBlunt extends SvelteComponent<PencilUnderlineBluntProps> {}
