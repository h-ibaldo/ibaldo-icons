import { SvelteComponent } from 'svelte';

export interface SkipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Skip extends SvelteComponent<SkipProps> {}
