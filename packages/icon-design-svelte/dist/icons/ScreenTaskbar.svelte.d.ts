import { SvelteComponent } from 'svelte';

export interface ScreenTaskbarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenTaskbar extends SvelteComponent<ScreenTaskbarProps> {}
