import { SvelteComponent } from 'svelte';

export interface UserPerson5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson5 extends SvelteComponent<UserPerson5Props> {}
