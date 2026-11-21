import { SvelteComponent } from 'svelte';

export interface GitCompareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitCompare extends SvelteComponent<GitCompareProps> {}
