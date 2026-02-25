import { SvelteComponent } from 'svelte';

export interface UserHead23Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead23 extends SvelteComponent<UserHead23Props> {}
