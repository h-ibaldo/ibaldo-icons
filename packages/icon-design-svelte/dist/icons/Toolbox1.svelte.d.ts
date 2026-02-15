import { SvelteComponent } from 'svelte';

export interface Toolbox1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Toolbox1 extends SvelteComponent<Toolbox1Props> {}
