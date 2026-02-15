import { SvelteComponent } from 'svelte';

export interface UserHead13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead13 extends SvelteComponent<UserHead13Props> {}
