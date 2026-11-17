import { SvelteComponent } from 'svelte';

export interface Scan2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scan2 extends SvelteComponent<Scan2Props> {}
