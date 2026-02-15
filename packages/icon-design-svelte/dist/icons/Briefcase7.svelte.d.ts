import { SvelteComponent } from 'svelte';

export interface Briefcase7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase7 extends SvelteComponent<Briefcase7Props> {}
