import { SvelteComponent } from 'svelte';

export interface ComputerDesktopLogoutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ComputerDesktopLogout extends SvelteComponent<ComputerDesktopLogoutProps> {}
