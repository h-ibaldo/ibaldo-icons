import { SvelteComponent } from 'svelte';

export interface ArrowRepeatCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRepeatCompact extends SvelteComponent<ArrowRepeatCompactProps> {}
