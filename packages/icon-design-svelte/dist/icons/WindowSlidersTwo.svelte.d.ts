import { SvelteComponent } from 'svelte';

export interface WindowSlidersTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSlidersTwo extends SvelteComponent<WindowSlidersTwoProps> {}
