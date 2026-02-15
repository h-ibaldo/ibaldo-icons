import { SvelteComponent } from 'svelte';

export interface Toolbox3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Toolbox3 extends SvelteComponent<Toolbox3Props> {}
