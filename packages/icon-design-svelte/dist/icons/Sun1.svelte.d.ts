import { SvelteComponent } from 'svelte';

export interface Sun1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun1 extends SvelteComponent<Sun1Props> {}
