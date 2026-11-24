import { SvelteComponent } from 'svelte';

export interface GitPullRequestPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequestPlus extends SvelteComponent<GitPullRequestPlusProps> {}
