import { SvelteComponent } from 'svelte';

export interface Briefcase5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase5 extends SvelteComponent<Briefcase5Props> {}
