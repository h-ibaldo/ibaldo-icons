import { SvelteComponent } from 'svelte';

export interface RotateScreen3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen3 extends SvelteComponent<RotateScreen3Props> {}
