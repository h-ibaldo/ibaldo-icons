import { SvelteComponent } from 'svelte';

export interface SkipBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipBack extends SvelteComponent<SkipBackProps> {}
