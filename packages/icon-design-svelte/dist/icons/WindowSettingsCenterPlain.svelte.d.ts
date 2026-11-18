import { SvelteComponent } from 'svelte';

export interface WindowSettingsCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettingsCenterPlain extends SvelteComponent<WindowSettingsCenterPlainProps> {}
