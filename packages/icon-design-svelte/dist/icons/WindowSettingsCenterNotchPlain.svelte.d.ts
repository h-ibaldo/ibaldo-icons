import { SvelteComponent } from 'svelte';

export interface WindowSettingsCenterNotchPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSettingsCenterNotchPlain extends SvelteComponent<WindowSettingsCenterNotchPlainProps> {}
