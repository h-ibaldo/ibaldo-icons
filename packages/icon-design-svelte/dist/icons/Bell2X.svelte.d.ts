import { SvelteComponent } from 'svelte';

export interface Bell2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2X extends SvelteComponent<Bell2XProps> {}
