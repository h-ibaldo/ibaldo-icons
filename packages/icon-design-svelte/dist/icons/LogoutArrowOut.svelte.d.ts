import { SvelteComponent } from 'svelte';

export interface LogoutArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LogoutArrowOut extends SvelteComponent<LogoutArrowOutProps> {}
