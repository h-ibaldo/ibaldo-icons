import { SvelteComponent } from 'svelte';

export interface ArrowCircle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle3 extends SvelteComponent<ArrowCircle3Props> {}
