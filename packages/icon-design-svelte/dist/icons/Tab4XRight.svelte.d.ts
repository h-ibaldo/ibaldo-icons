import { SvelteComponent } from 'svelte';

export interface Tab4XRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4XRight extends SvelteComponent<Tab4XRightProps> {}
