import { SvelteComponent } from 'svelte';

export interface UserPerson15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson15 extends SvelteComponent<UserPerson15Props> {}
