import { SvelteComponent } from 'svelte';

export interface Door2XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door2X extends SvelteComponent<Door2XProps> {}
