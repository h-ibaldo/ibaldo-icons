import { SvelteComponent } from 'svelte';

export interface WindowListXCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListXCirclePlain extends SvelteComponent<WindowListXCirclePlainProps> {}
