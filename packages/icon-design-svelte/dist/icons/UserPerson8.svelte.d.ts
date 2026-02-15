import { SvelteComponent } from 'svelte';

export interface UserPerson8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson8 extends SvelteComponent<UserPerson8Props> {}
