import { SvelteComponent } from 'svelte';

export interface House6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House6 extends SvelteComponent<House6Props> {}
