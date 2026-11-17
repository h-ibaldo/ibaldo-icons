import { SvelteComponent } from 'svelte';

export interface CheckLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckLarge extends SvelteComponent<CheckLargeProps> {}
