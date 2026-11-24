import { SvelteComponent } from 'svelte';

export interface UserPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPlus extends SvelteComponent<UserPlusProps> {}
