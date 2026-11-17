import { SvelteComponent } from 'svelte';

export interface ReplaceDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ReplaceDots extends SvelteComponent<ReplaceDotsProps> {}
