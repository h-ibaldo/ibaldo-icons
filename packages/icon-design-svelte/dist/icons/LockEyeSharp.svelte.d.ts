import { SvelteComponent } from 'svelte';

export interface LockEyeSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyeSharp extends SvelteComponent<LockEyeSharpProps> {}
