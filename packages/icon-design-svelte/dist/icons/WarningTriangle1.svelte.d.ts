import { SvelteComponent } from 'svelte';

export interface WarningTriangle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangle1 extends SvelteComponent<WarningTriangle1Props> {}
