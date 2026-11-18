import { SvelteComponent } from 'svelte';

export interface ArrowRightFromBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightFromBar extends SvelteComponent<ArrowRightFromBarProps> {}
