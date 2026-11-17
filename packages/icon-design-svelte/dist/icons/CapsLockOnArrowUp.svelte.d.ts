import { SvelteComponent } from 'svelte';

export interface CapsLockOnArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsLockOnArrowUp extends SvelteComponent<CapsLockOnArrowUpProps> {}
