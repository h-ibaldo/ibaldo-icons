import { SvelteComponent } from 'svelte';

export interface Briefcase12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Briefcase12 extends SvelteComponent<Briefcase12Props> {}
