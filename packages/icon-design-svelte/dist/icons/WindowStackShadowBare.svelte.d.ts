import { SvelteComponent } from 'svelte';

export interface WindowStackShadowBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStackShadowBare extends SvelteComponent<WindowStackShadowBareProps> {}
