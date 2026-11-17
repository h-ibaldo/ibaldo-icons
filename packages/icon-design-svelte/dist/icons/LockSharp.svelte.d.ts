import { SvelteComponent } from 'svelte';

export interface LockSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockSharp extends SvelteComponent<LockSharpProps> {}
