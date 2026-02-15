import { SvelteComponent } from 'svelte';

export interface UserPerson32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson32 extends SvelteComponent<UserPerson32Props> {}
