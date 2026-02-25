import { SvelteComponent } from 'svelte';

export interface PencilTracing4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing4 extends SvelteComponent<PencilTracing4Props> {}
