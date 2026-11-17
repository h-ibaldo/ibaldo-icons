import { SvelteComponent } from 'svelte';

export interface Lock4PasswordTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4PasswordTwo extends SvelteComponent<Lock4PasswordTwoProps> {}
