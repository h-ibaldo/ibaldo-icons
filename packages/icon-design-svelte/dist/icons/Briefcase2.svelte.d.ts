import { SvelteComponent } from 'svelte';

export interface Briefcase2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase2 extends SvelteComponent<Briefcase2Props> {}
