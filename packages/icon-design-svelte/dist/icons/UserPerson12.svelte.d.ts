import { SvelteComponent } from 'svelte';

export interface UserPerson12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson12 extends SvelteComponent<UserPerson12Props> {}
