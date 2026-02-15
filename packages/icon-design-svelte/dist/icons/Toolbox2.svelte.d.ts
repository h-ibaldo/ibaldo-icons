import { SvelteComponent } from 'svelte';

export interface Toolbox2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Toolbox2 extends SvelteComponent<Toolbox2Props> {}
