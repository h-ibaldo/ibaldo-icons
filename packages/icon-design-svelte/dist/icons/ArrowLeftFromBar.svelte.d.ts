import { SvelteComponent } from 'svelte';

export interface ArrowLeftFromBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftFromBar extends SvelteComponent<ArrowLeftFromBarProps> {}
