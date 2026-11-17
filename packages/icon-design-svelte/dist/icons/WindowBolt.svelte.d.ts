import { SvelteComponent } from 'svelte';

export interface WindowBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBolt extends SvelteComponent<WindowBoltProps> {}
