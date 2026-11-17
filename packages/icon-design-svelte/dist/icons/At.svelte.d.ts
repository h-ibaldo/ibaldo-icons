import { SvelteComponent } from 'svelte';

export interface AtProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class At extends SvelteComponent<AtProps> {}
