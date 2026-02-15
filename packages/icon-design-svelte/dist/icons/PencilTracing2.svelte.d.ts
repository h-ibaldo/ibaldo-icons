import { SvelteComponent } from 'svelte';

export interface PencilTracing2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing2 extends SvelteComponent<PencilTracing2Props> {}
