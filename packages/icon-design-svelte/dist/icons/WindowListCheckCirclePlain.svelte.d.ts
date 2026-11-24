import { SvelteComponent } from 'svelte';

export interface WindowListCheckCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListCheckCirclePlain extends SvelteComponent<WindowListCheckCirclePlainProps> {}
