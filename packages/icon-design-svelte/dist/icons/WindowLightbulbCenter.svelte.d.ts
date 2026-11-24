import { SvelteComponent } from 'svelte';

export interface WindowLightbulbCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLightbulbCenter extends SvelteComponent<WindowLightbulbCenterProps> {}
