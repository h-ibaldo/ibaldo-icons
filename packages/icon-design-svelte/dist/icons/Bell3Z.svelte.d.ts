import { SvelteComponent } from 'svelte';

export interface Bell3ZProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Z extends SvelteComponent<Bell3ZProps> {}
