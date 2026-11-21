import { SvelteComponent } from 'svelte';

export interface GitCompareArrowsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitCompareArrows extends SvelteComponent<GitCompareArrowsProps> {}
