import { SvelteComponent } from 'svelte';

export interface RotateScreen4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen4 extends SvelteComponent<RotateScreen4Props> {}
