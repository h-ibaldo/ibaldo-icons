import { SvelteComponent } from 'svelte';

export interface Lock4CheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Checked extends SvelteComponent<Lock4CheckedProps> {}
