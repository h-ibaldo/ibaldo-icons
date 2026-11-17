import { SvelteComponent } from 'svelte';

export interface Lock4EyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Eye extends SvelteComponent<Lock4EyeProps> {}
