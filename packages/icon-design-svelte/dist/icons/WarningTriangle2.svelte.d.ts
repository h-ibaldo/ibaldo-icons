import { SvelteComponent } from 'svelte';

export interface WarningTriangle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangle2 extends SvelteComponent<WarningTriangle2Props> {}
