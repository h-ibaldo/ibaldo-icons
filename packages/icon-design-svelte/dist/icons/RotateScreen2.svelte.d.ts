import { SvelteComponent } from 'svelte';

export interface RotateScreen2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen2 extends SvelteComponent<RotateScreen2Props> {}
