import { SvelteComponent } from 'svelte';

export interface XCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XCircleSmall extends SvelteComponent<XCircleSmallProps> {}
