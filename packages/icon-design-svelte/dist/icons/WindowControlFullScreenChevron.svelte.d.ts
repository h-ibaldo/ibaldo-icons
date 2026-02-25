import { SvelteComponent } from 'svelte';

export interface WindowControlFullScreenChevronProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlFullScreenChevron extends SvelteComponent<WindowControlFullScreenChevronProps> {}
