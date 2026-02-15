import { SvelteComponent } from 'svelte';

export interface Briefcase10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase10 extends SvelteComponent<Briefcase10Props> {}
