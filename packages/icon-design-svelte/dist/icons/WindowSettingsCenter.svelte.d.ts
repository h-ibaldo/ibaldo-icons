import { SvelteComponent } from 'svelte';

export interface WindowSettingsCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettingsCenter extends SvelteComponent<WindowSettingsCenterProps> {}
