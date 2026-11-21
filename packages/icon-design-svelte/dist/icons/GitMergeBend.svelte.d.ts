import { SvelteComponent } from 'svelte';

export interface GitMergeBendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitMergeBend extends SvelteComponent<GitMergeBendProps> {}
