import { SvelteComponent } from 'svelte';

export interface UserHead4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead4 extends SvelteComponent<UserHead4Props> {}
