import { SvelteComponent } from 'svelte';

export interface ScalpelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scalpel extends SvelteComponent<ScalpelProps> {}
