import { SvelteComponent } from 'svelte';

export interface LockCheckSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckSharp extends SvelteComponent<LockCheckSharpProps> {}
