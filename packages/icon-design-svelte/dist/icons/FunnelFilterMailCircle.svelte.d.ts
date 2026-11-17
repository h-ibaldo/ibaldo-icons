import { SvelteComponent } from 'svelte';

export interface FunnelFilterMailCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterMailCircle extends SvelteComponent<FunnelFilterMailCircleProps> {}
