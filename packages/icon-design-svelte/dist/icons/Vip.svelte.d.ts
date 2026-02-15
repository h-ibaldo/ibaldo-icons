import { SvelteComponent } from 'svelte';

export interface VipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Vip extends SvelteComponent<VipProps> {}
