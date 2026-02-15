import { SvelteComponent } from 'svelte';

export interface UserHead2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead2 extends SvelteComponent<UserHead2Props> {}
