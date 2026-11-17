import { SvelteComponent } from 'svelte';

export interface WindowStackShadowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackShadow extends SvelteComponent<WindowStackShadowProps> {}
