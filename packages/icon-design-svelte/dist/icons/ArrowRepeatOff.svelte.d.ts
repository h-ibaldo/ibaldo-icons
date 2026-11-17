import { SvelteComponent } from 'svelte';

export interface ArrowRepeatOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatOff extends SvelteComponent<ArrowRepeatOffProps> {}
