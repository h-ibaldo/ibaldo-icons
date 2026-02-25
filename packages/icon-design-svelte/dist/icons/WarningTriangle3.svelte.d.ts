import { SvelteComponent } from 'svelte';

export interface WarningTriangle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangle3 extends SvelteComponent<WarningTriangle3Props> {}
