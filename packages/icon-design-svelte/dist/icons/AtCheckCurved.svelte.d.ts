import { SvelteComponent } from 'svelte';

export interface AtCheckCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCheckCurved extends SvelteComponent<AtCheckCurvedProps> {}
