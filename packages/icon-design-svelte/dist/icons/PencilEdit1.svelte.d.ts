import { SvelteComponent } from 'svelte';

export interface PencilEdit1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit1 extends SvelteComponent<PencilEdit1Props> {}
