import { SvelteComponent } from 'svelte';

export interface LogoutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Logout extends SvelteComponent<LogoutProps> {}
