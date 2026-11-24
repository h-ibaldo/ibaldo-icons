import { SvelteComponent } from 'svelte';

export interface WindowListPlusCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListPlusCirclePlain extends SvelteComponent<WindowListPlusCirclePlainProps> {}
