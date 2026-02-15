import { SvelteComponent } from 'svelte';

export interface PencilEdit5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilEdit5 extends SvelteComponent<PencilEdit5Props> {}
