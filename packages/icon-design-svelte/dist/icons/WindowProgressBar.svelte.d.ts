import { SvelteComponent } from 'svelte';

export interface WindowProgressBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowProgressBar extends SvelteComponent<WindowProgressBarProps> {}
