import { SvelteComponent } from 'svelte';

export interface UserXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserX extends SvelteComponent<UserXProps> {}
