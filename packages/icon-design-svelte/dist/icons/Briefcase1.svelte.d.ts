import { SvelteComponent } from 'svelte';

export interface Briefcase1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase1 extends SvelteComponent<Briefcase1Props> {}
