import { SvelteComponent } from 'svelte';

export interface UserHead25Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead25 extends SvelteComponent<UserHead25Props> {}
