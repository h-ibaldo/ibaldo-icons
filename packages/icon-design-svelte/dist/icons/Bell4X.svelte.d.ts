import { SvelteComponent } from 'svelte';

export interface Bell4XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4X extends SvelteComponent<Bell4XProps> {}
