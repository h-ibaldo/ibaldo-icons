import { SvelteComponent } from 'svelte';

export interface Bell2ZProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Z extends SvelteComponent<Bell2ZProps> {}
