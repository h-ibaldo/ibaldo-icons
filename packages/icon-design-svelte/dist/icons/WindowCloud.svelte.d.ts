import { SvelteComponent } from 'svelte';

export interface WindowCloudProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloud extends SvelteComponent<WindowCloudProps> {}
