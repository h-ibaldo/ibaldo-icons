import { SvelteComponent } from 'svelte';

export interface PencilTracing6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing6 extends SvelteComponent<PencilTracing6Props> {}
