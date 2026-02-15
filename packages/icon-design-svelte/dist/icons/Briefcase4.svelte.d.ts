import { SvelteComponent } from 'svelte';

export interface Briefcase4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase4 extends SvelteComponent<Briefcase4Props> {}
