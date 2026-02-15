import { SvelteComponent } from 'svelte';

export interface UserPerson7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson7 extends SvelteComponent<UserPerson7Props> {}
