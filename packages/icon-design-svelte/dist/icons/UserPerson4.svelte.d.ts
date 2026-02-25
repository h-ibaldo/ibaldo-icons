import { SvelteComponent } from 'svelte';

export interface UserPerson4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson4 extends SvelteComponent<UserPerson4Props> {}
