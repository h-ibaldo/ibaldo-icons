import { SvelteComponent } from 'svelte';

export interface Sun2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun2 extends SvelteComponent<Sun2Props> {}
