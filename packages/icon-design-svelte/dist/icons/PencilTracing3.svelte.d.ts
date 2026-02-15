import { SvelteComponent } from 'svelte';

export interface PencilTracing3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing3 extends SvelteComponent<PencilTracing3Props> {}
