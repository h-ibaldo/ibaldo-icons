import { SvelteComponent } from 'svelte';

export interface House12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House12 extends SvelteComponent<House12Props> {}
