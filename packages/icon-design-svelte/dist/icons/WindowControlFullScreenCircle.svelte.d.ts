import { SvelteComponent } from 'svelte';

export interface WindowControlFullscreenCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlFullscreenCircle extends SvelteComponent<WindowControlFullscreenCircleProps> {}
