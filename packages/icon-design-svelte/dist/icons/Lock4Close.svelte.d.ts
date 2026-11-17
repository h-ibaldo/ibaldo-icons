import { SvelteComponent } from 'svelte';

export interface Lock4CloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Close extends SvelteComponent<Lock4CloseProps> {}
