import { SvelteComponent } from 'svelte';

export interface UserHead21Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead21 extends SvelteComponent<UserHead21Props> {}
