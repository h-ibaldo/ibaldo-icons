import { SvelteComponent } from 'svelte';

export interface UserHead22Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead22 extends SvelteComponent<UserHead22Props> {}
