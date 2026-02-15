import { SvelteComponent } from 'svelte';

export interface UserPerson3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserPerson3 extends SvelteComponent<UserPerson3Props> {}
