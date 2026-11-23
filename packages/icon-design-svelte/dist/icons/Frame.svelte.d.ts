import { SvelteComponent } from 'svelte';

export interface FrameProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Frame extends SvelteComponent<FrameProps> {}
