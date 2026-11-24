import { SvelteComponent } from 'svelte';

export interface WindowLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLock extends SvelteComponent<WindowLockProps> {}
