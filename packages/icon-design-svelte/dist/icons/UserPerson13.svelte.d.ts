import { SvelteComponent } from 'svelte';

export interface UserPerson13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson13 extends SvelteComponent<UserPerson13Props> {}
