import { SvelteComponent } from 'svelte';

export interface UserPerson21Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson21 extends SvelteComponent<UserPerson21Props> {}
