import { SvelteComponent } from 'svelte';

export interface UserMenuProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserMenu extends SvelteComponent<UserMenuProps> {}
