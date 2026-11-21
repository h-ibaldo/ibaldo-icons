import { SvelteComponent } from 'svelte';

export interface PencilPlusDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilPlusDot extends SvelteComponent<PencilPlusDotProps> {}
