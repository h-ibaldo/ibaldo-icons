import { SvelteComponent } from 'svelte';

export interface Bell4ZProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Z extends SvelteComponent<Bell4ZProps> {}
