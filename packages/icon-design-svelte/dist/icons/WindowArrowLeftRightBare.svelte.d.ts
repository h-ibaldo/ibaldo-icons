import { SvelteComponent } from 'svelte';

export interface WindowArrowLeftRightBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowLeftRightBare extends SvelteComponent<WindowArrowLeftRightBareProps> {}
