import { SvelteComponent } from 'svelte';

export interface WindowXCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowXCirclePlain extends SvelteComponent<WindowXCirclePlainProps> {}
