import { SvelteComponent } from 'svelte';

export interface Lock4PasswordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Password extends SvelteComponent<Lock4PasswordProps> {}
