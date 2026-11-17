import { SvelteComponent } from 'svelte';

export interface AtXCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtXCurved extends SvelteComponent<AtXCurvedProps> {}
