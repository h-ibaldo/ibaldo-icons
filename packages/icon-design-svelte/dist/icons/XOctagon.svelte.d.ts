import { SvelteComponent } from 'svelte';

export interface XOctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XOctagon extends SvelteComponent<XOctagonProps> {}
