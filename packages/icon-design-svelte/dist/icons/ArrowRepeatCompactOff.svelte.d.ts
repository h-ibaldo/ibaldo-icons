import { SvelteComponent } from 'svelte';

export interface ArrowRepeatCompactOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatCompactOff extends SvelteComponent<ArrowRepeatCompactOffProps> {}
