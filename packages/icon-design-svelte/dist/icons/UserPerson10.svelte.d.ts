import { SvelteComponent } from 'svelte';

export interface UserPerson10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson10 extends SvelteComponent<UserPerson10Props> {}
