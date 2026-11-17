import { SvelteComponent } from 'svelte';

export interface Door3ArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door3ArrowOut extends SvelteComponent<Door3ArrowOutProps> {}
