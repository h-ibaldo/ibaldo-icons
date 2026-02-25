import { SvelteComponent } from 'svelte';

export interface UserPerson16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson16 extends SvelteComponent<UserPerson16Props> {}
