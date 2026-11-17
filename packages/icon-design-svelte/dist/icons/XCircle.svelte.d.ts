import { SvelteComponent } from 'svelte';

export interface XCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XCircle extends SvelteComponent<XCircleProps> {}
