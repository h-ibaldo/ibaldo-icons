import { SvelteComponent } from 'svelte';

export interface PencilTracing1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing1 extends SvelteComponent<PencilTracing1Props> {}
