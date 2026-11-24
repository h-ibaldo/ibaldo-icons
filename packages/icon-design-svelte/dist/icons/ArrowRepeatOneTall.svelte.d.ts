import { SvelteComponent } from 'svelte';

export interface ArrowRepeatOneTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatOneTall extends SvelteComponent<ArrowRepeatOneTallProps> {}
