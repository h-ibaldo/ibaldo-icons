import { SvelteComponent } from 'svelte';

export interface RotateScreen5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotateScreen5 extends SvelteComponent<RotateScreen5Props> {}
