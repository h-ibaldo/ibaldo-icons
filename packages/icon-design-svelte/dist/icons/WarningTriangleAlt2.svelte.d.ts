import { SvelteComponent } from 'svelte';

export interface WarningTriangleAlt2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangleAlt2 extends SvelteComponent<WarningTriangleAlt2Props> {}
