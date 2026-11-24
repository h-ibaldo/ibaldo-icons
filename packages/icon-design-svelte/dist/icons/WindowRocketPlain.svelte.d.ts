import { SvelteComponent } from 'svelte';

export interface WindowRocketPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowRocketPlain extends SvelteComponent<WindowRocketPlainProps> {}
