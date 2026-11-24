import { SvelteComponent } from 'svelte';

export interface PencilProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Pencil extends SvelteComponent<PencilProps> {}
