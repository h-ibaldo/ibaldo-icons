import { SvelteComponent } from 'svelte';

export interface Bell3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Check extends SvelteComponent<Bell3CheckProps> {}
