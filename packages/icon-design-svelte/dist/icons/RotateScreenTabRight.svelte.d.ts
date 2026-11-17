import { SvelteComponent } from 'svelte';

export interface RotateScreenTabRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreenTabRight extends SvelteComponent<RotateScreenTabRightProps> {}
