import { SvelteComponent } from 'svelte';

export interface Door2ArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door2ArrowOut extends SvelteComponent<Door2ArrowOutProps> {}
