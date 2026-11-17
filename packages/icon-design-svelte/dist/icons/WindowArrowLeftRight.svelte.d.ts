import { SvelteComponent } from 'svelte';

export interface WindowArrowLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowLeftRight extends SvelteComponent<WindowArrowLeftRightProps> {}
