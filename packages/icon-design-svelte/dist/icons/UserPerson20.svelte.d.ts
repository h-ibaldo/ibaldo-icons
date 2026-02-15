import { SvelteComponent } from 'svelte';

export interface UserPerson20Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson20 extends SvelteComponent<UserPerson20Props> {}
