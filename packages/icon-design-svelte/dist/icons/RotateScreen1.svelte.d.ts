import { SvelteComponent } from 'svelte';

export interface RotateScreen1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen1 extends SvelteComponent<RotateScreen1Props> {}
