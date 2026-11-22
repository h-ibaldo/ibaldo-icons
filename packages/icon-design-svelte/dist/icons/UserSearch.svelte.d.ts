import { SvelteComponent } from 'svelte';

export interface UserSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserSearch extends SvelteComponent<UserSearchProps> {}
