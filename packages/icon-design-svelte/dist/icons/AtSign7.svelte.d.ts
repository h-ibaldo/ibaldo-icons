import { SvelteComponent } from 'svelte';

export interface AtSign7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign7 extends SvelteComponent<AtSign7Props> {}
