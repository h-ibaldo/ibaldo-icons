import { SvelteComponent } from 'svelte';

export interface WarningTriangleAlt3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangleAlt3 extends SvelteComponent<WarningTriangleAlt3Props> {}
