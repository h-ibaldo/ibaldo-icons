import { SvelteComponent } from 'svelte';

export interface CapsLockOffArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsLockOffArrowUp extends SvelteComponent<CapsLockOffArrowUpProps> {}
