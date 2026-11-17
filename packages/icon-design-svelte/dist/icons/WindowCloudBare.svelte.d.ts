import { SvelteComponent } from 'svelte';

export interface WindowCloudBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloudBare extends SvelteComponent<WindowCloudBareProps> {}
