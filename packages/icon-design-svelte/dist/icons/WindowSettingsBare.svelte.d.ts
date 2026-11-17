import { SvelteComponent } from 'svelte';

export interface WindowSettingsBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettingsBare extends SvelteComponent<WindowSettingsBareProps> {}
