import { SvelteComponent } from 'svelte';

export interface Briefcase11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase11 extends SvelteComponent<Briefcase11Props> {}
