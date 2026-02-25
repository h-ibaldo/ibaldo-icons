import { SvelteComponent } from 'svelte';

export interface PencilEdit2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit2 extends SvelteComponent<PencilEdit2Props> {}
