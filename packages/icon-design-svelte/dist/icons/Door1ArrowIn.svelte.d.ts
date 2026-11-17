import { SvelteComponent } from 'svelte';

export interface Door1ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door1ArrowIn extends SvelteComponent<Door1ArrowInProps> {}
