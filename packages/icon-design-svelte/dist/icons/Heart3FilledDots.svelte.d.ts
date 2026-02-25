import { SvelteComponent } from 'svelte';

export interface Heart3FilledDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart3FilledDots extends SvelteComponent<Heart3FilledDotsProps> {}
