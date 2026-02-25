import { SvelteComponent } from 'svelte';

export interface UserPerson22Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson22 extends SvelteComponent<UserPerson22Props> {}
