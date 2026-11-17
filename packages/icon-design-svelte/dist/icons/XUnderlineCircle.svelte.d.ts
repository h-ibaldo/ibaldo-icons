import { SvelteComponent } from 'svelte';

export interface XUnderlineCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XUnderlineCircle extends SvelteComponent<XUnderlineCircleProps> {}
