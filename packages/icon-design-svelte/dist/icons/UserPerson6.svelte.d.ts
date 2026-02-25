import { SvelteComponent } from 'svelte';

export interface UserPerson6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson6 extends SvelteComponent<UserPerson6Props> {}
