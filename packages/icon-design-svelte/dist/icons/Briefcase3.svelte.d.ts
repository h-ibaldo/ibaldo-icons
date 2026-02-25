import { SvelteComponent } from 'svelte';

export interface Briefcase3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase3 extends SvelteComponent<Briefcase3Props> {}
