import { SvelteComponent } from 'svelte';

export interface HandRotateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandRotate extends SvelteComponent<HandRotateProps> {}
