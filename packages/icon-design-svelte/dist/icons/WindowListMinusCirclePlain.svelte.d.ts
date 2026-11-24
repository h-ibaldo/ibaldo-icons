import { SvelteComponent } from 'svelte';

export interface WindowListMinusCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListMinusCirclePlain extends SvelteComponent<WindowListMinusCirclePlainProps> {}
