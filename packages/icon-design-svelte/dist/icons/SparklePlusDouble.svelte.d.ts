import { SvelteComponent } from 'svelte';

export interface SparklePlusDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SparklePlusDouble extends SvelteComponent<SparklePlusDoubleProps> {}
