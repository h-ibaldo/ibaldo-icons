import { SvelteComponent } from 'svelte';

export interface UserHead16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead16 extends SvelteComponent<UserHead16Props> {}
