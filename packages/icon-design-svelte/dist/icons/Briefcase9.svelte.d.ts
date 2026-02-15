import { SvelteComponent } from 'svelte';

export interface Briefcase9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase9 extends SvelteComponent<Briefcase9Props> {}
