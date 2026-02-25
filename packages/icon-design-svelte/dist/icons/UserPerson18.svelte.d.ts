import { SvelteComponent } from 'svelte';

export interface UserPerson18Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson18 extends SvelteComponent<UserPerson18Props> {}
