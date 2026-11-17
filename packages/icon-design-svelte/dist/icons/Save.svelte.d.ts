import { SvelteComponent } from 'svelte';

export interface SaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Save extends SvelteComponent<SaveProps> {}
