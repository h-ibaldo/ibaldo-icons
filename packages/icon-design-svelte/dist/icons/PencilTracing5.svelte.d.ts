import { SvelteComponent } from 'svelte';

export interface PencilTracing5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing5 extends SvelteComponent<PencilTracing5Props> {}
