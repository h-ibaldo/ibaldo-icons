import { SvelteComponent } from 'svelte';

export interface AtSign4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4 extends SvelteComponent<AtSign4Props> {}
