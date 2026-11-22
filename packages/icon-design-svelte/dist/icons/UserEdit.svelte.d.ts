import { SvelteComponent } from 'svelte';

export interface UserEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserEdit extends SvelteComponent<UserEditProps> {}
