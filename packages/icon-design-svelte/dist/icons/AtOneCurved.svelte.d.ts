import { SvelteComponent } from 'svelte';

export interface AtOneCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtOneCurved extends SvelteComponent<AtOneCurvedProps> {}
