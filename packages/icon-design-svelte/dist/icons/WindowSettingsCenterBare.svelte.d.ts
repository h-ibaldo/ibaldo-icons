import { SvelteComponent } from 'svelte';

export interface WindowSettingsCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettingsCenterBare extends SvelteComponent<WindowSettingsCenterBareProps> {}
