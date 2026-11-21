import { SvelteComponent } from 'svelte';

export interface GitCommitHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitCommitHorizontal extends SvelteComponent<GitCommitHorizontalProps> {}
