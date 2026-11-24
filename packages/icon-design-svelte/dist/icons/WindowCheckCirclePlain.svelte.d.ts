import { SvelteComponent } from 'svelte';

export interface WindowCheckCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCheckCirclePlain extends SvelteComponent<WindowCheckCirclePlainProps> {}
