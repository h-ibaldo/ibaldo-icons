import { SvelteComponent } from 'svelte';

export interface UserHead1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead1 extends SvelteComponent<UserHead1Props> {}
