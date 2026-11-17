import { SvelteComponent } from 'svelte';

export interface WindowSlidersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSliders extends SvelteComponent<WindowSlidersProps> {}
