import { SvelteComponent } from 'svelte';

export interface Lock3PasswordDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3PasswordDots extends SvelteComponent<Lock3PasswordDotsProps> {}
