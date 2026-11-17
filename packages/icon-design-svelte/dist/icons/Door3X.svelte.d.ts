import { SvelteComponent } from 'svelte';

export interface Door3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door3X extends SvelteComponent<Door3XProps> {}
