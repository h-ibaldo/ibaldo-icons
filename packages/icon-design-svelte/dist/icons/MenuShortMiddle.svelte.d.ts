import { SvelteComponent } from 'svelte';

export interface MenuShortMiddleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuShortMiddle extends SvelteComponent<MenuShortMiddleProps> {}
