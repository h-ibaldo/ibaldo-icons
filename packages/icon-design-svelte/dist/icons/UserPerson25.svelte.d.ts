import { SvelteComponent } from 'svelte';

export interface UserPerson25Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson25 extends SvelteComponent<UserPerson25Props> {}
