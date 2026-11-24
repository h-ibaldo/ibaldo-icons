import { SvelteComponent } from 'svelte';

export interface GitPullRequestPlusBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequestPlusBare extends SvelteComponent<GitPullRequestPlusBareProps> {}
