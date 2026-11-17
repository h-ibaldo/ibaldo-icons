import { SvelteComponent } from 'svelte';

export interface CapsLockOffFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsLockOffFlat extends SvelteComponent<CapsLockOffFlatProps> {}
