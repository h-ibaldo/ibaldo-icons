import { SvelteComponent } from 'svelte';

export interface CloudProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud extends SvelteComponent<CloudProps> {}
