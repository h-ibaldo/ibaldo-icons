import { SvelteComponent } from 'svelte';

export interface UserPerson2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson2 extends SvelteComponent<UserPerson2Props> {}
