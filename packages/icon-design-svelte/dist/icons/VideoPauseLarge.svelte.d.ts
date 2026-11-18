import { SvelteComponent } from 'svelte';

export interface VideoPauseLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VideoPauseLarge extends SvelteComponent<VideoPauseLargeProps> {}
