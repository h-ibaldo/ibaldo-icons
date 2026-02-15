import { SvelteComponent } from 'svelte';

export interface UserHead10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead10 extends SvelteComponent<UserHead10Props> {}
