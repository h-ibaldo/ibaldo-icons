import { SvelteComponent } from 'svelte';

export interface Briefcase16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase16 extends SvelteComponent<Briefcase16Props> {}
