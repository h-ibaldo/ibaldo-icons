import { SvelteComponent } from 'svelte';

export interface CapsLockFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsLockFlat extends SvelteComponent<CapsLockFlatProps> {}
