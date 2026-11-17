import { SvelteComponent } from 'svelte';

export interface AtSign8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign8 extends SvelteComponent<AtSign8Props> {}
