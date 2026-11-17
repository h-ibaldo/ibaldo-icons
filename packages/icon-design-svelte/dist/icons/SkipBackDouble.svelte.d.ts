import { SvelteComponent } from 'svelte';

export interface SkipBackDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBackDouble extends SvelteComponent<SkipBackDoubleProps> {}
