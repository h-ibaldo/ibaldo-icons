import { SvelteComponent } from 'svelte';

export interface ScreenShareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShare extends SvelteComponent<ScreenShareProps> {}
