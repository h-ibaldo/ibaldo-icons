import { SvelteComponent } from 'svelte';

export interface VipRectangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VipRectangle extends SvelteComponent<VipRectangleProps> {}
