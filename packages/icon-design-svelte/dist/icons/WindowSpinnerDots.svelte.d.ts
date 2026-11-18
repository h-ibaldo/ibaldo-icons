import { SvelteComponent } from 'svelte';

export interface WindowSpinnerDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerDots extends SvelteComponent<WindowSpinnerDotsProps> {}
