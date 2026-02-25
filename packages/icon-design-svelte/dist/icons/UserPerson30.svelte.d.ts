import { SvelteComponent } from 'svelte';

export interface UserPerson30Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson30 extends SvelteComponent<UserPerson30Props> {}
