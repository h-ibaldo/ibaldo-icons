import { SvelteComponent } from 'svelte';

export interface UserMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserMinus extends SvelteComponent<UserMinusProps> {}
