import { SvelteComponent } from 'svelte';

export interface UserPerson1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson1 extends SvelteComponent<UserPerson1Props> {}
