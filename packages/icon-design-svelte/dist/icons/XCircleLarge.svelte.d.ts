import { SvelteComponent } from 'svelte';

export interface XCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XCircleLarge extends SvelteComponent<XCircleLargeProps> {}
