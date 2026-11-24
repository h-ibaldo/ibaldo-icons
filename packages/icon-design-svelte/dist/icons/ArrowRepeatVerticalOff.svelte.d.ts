import { SvelteComponent } from 'svelte';

export interface ArrowRepeatVerticalOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatVerticalOff extends SvelteComponent<ArrowRepeatVerticalOffProps> {}
