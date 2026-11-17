import { SvelteComponent } from 'svelte';

export interface Lock4CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Check extends SvelteComponent<Lock4CheckProps> {}
