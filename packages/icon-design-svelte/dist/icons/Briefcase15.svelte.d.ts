import { SvelteComponent } from 'svelte';

export interface Briefcase15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase15 extends SvelteComponent<Briefcase15Props> {}
