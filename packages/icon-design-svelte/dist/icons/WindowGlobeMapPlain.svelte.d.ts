import { SvelteComponent } from 'svelte';

export interface WindowGlobeMapPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowGlobeMapPlain extends SvelteComponent<WindowGlobeMapPlainProps> {}
