import { SvelteComponent } from 'svelte';

export interface RouterLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RouterLock extends SvelteComponent<RouterLockProps> {}
