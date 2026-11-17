import { SvelteComponent } from 'svelte';

export interface Lock3PasswordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Password extends SvelteComponent<Lock3PasswordProps> {}
