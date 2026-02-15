import { SvelteComponent } from 'svelte';

export interface UserPerson11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson11 extends SvelteComponent<UserPerson11Props> {}
