import { SvelteComponent } from 'svelte';

export interface CapsuleOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CapsuleOff extends SvelteComponent<CapsuleOffProps> {}
