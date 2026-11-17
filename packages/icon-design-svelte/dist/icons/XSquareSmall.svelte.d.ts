import { SvelteComponent } from 'svelte';

export interface XSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XSquareSmall extends SvelteComponent<XSquareSmallProps> {}
