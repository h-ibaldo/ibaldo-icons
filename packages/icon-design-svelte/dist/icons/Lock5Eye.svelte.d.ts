import { SvelteComponent } from 'svelte';

export interface Lock5EyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Eye extends SvelteComponent<Lock5EyeProps> {}
