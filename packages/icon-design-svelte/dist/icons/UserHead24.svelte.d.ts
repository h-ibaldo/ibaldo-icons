import { SvelteComponent } from 'svelte';

export interface UserHead24Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead24 extends SvelteComponent<UserHead24Props> {}
