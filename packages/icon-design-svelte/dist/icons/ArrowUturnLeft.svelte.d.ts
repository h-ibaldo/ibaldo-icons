import { SvelteComponent } from 'svelte';

export interface ArrowUturnLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnLeft extends SvelteComponent<ArrowUturnLeftProps> {}
