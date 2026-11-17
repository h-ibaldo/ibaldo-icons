import { SvelteComponent } from 'svelte';

export interface RotateScreenBezelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreenBezel extends SvelteComponent<RotateScreenBezelProps> {}
