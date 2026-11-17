import { SvelteComponent } from 'svelte';

export interface WindowPlusCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlusCirclePlain extends SvelteComponent<WindowPlusCirclePlainProps> {}
