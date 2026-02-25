import { SvelteComponent } from 'svelte';

export interface UserHead32Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead32 extends SvelteComponent<UserHead32Props> {}
