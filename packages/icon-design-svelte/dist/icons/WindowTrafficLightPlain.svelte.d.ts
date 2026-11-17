import { SvelteComponent } from 'svelte';

export interface WindowTrafficLightPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowTrafficLightPlain extends SvelteComponent<WindowTrafficLightPlainProps> {}
