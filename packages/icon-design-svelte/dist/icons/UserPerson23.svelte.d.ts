import { SvelteComponent } from 'svelte';

export interface UserPerson23Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson23 extends SvelteComponent<UserPerson23Props> {}
