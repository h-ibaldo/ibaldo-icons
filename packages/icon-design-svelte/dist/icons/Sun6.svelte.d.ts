import { SvelteComponent } from 'svelte';

export interface Sun6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Sun6 extends SvelteComponent<Sun6Props> {}
