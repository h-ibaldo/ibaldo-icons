import { SvelteComponent } from 'svelte';

export interface UserHead5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead5 extends SvelteComponent<UserHead5Props> {}
