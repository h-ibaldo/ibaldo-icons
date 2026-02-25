import { SvelteComponent } from 'svelte';

export interface Briefcase13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase13 extends SvelteComponent<Briefcase13Props> {}
