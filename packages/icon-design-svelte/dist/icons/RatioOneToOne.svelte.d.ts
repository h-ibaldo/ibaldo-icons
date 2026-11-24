import { SvelteComponent } from 'svelte';

export interface RatioOneToOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RatioOneToOne extends SvelteComponent<RatioOneToOneProps> {}
