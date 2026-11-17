import { SvelteComponent } from 'svelte';

export interface ArrowRepeatTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatTall extends SvelteComponent<ArrowRepeatTallProps> {}
