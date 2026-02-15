import { SvelteComponent } from 'svelte';

export interface UserHead6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead6 extends SvelteComponent<UserHead6Props> {}
