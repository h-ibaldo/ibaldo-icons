import { SvelteComponent } from 'svelte';

export interface WindowControlFullscreen2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowControlFullscreen2 extends SvelteComponent<WindowControlFullscreen2Props> {}
