import { SvelteComponent } from 'svelte';

export interface AdjustProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Adjust extends SvelteComponent<AdjustProps> {}
