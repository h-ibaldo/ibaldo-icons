import { SvelteComponent } from 'svelte';

export interface WindowLockPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLockPlain extends SvelteComponent<WindowLockPlainProps> {}
