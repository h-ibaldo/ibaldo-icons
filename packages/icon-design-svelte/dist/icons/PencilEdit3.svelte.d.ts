import { SvelteComponent } from 'svelte';

export interface PencilEdit3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit3 extends SvelteComponent<PencilEdit3Props> {}
