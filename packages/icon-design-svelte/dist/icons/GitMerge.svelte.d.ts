import { SvelteComponent } from 'svelte';

export interface GitMergeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitMerge extends SvelteComponent<GitMergeProps> {}
