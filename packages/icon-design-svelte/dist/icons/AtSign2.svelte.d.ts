import { SvelteComponent } from 'svelte';

export interface AtSign2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2 extends SvelteComponent<AtSign2Props> {}
