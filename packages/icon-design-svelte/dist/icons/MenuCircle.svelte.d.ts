import { SvelteComponent } from 'svelte';

export interface MenuCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MenuCircle extends SvelteComponent<MenuCircleProps> {}
