import { SvelteComponent } from 'svelte';

export interface ScreenShareXDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScreenShareXDouble extends SvelteComponent<ScreenShareXDoubleProps> {}
