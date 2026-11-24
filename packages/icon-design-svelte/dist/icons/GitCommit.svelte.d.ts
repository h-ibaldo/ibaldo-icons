import { SvelteComponent } from 'svelte';

export interface GitCommitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitCommit extends SvelteComponent<GitCommitProps> {}
