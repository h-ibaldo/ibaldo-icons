import { SvelteComponent } from 'svelte';

export interface BellCircleDashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCircleDash extends SvelteComponent<BellCircleDashProps> {}
