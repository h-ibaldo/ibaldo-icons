import { SvelteComponent } from 'svelte';

export interface LockPasswordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockPassword extends SvelteComponent<LockPasswordProps> {}
