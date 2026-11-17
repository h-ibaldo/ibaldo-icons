import { SvelteComponent } from 'svelte';

export interface CloudMinusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMinusCorner extends SvelteComponent<CloudMinusCornerProps> {}
