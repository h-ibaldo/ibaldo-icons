import { SvelteComponent } from 'svelte';

export interface DollarShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DollarShort extends SvelteComponent<DollarShortProps> {}
