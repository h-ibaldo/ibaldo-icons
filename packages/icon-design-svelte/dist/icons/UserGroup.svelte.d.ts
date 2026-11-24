import { SvelteComponent } from 'svelte';

export interface UserGroupProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserGroup extends SvelteComponent<UserGroupProps> {}
