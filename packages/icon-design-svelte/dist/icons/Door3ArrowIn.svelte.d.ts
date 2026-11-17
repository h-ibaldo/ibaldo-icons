import { SvelteComponent } from 'svelte';

export interface Door3ArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door3ArrowIn extends SvelteComponent<Door3ArrowInProps> {}
