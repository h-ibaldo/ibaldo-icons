import { SvelteComponent } from 'svelte';

export interface PencilTracing7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilTracing7 extends SvelteComponent<PencilTracing7Props> {}
