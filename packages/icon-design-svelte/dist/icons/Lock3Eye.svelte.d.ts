import { SvelteComponent } from 'svelte';

export interface Lock3EyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Eye extends SvelteComponent<Lock3EyeProps> {}
