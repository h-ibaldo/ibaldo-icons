import { SvelteComponent } from 'svelte';

export interface WindowKeyHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowKeyHorizontal extends SvelteComponent<WindowKeyHorizontalProps> {}
