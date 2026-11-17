import { SvelteComponent } from 'svelte';

export interface LockOpenCheckSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckSharp extends SvelteComponent<LockOpenCheckSharpProps> {}
