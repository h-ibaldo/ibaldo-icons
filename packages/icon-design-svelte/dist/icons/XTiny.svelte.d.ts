import { SvelteComponent } from 'svelte';

export interface XTinyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XTiny extends SvelteComponent<XTinyProps> {}
