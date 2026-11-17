import { SvelteComponent } from 'svelte';

export interface Bell6XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6X extends SvelteComponent<Bell6XProps> {}
