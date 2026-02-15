import { SvelteComponent } from 'svelte';

export interface ArrowCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowCircle2 extends SvelteComponent<ArrowCircle2Props> {}
