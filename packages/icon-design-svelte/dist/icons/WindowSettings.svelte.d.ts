import { SvelteComponent } from 'svelte';

export interface WindowSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettings extends SvelteComponent<WindowSettingsProps> {}
