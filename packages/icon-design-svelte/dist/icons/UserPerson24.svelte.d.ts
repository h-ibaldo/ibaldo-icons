import { SvelteComponent } from 'svelte';

export interface UserPerson24Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson24 extends SvelteComponent<UserPerson24Props> {}
