import { SvelteComponent } from 'svelte';

export interface UserPerson9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson9 extends SvelteComponent<UserPerson9Props> {}
