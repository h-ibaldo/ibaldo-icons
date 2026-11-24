import { SvelteComponent } from 'svelte';

export interface DistributeCenterVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DistributeCenterVertical extends SvelteComponent<DistributeCenterVerticalProps> {}
