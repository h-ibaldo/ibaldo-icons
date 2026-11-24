import { SvelteComponent } from 'svelte';

export interface CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Check extends SvelteComponent<CheckProps> {}
