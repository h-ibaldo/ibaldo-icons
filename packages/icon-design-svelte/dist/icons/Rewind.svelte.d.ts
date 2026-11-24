import { SvelteComponent } from 'svelte';

export interface RewindProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Rewind extends SvelteComponent<RewindProps> {}
