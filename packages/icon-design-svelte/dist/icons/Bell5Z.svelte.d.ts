import { SvelteComponent } from 'svelte';

export interface Bell5ZProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Z extends SvelteComponent<Bell5ZProps> {}
