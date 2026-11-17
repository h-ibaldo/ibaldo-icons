import { SvelteComponent } from 'svelte';

export interface Door2ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door2ArrowIn extends SvelteComponent<Door2ArrowInProps> {}
