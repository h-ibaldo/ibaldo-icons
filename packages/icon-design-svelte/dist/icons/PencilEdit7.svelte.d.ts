import { SvelteComponent } from 'svelte';

export interface PencilEdit7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit7 extends SvelteComponent<PencilEdit7Props> {}
