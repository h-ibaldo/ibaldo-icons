import { SvelteComponent } from 'svelte';

export interface UserHead11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead11 extends SvelteComponent<UserHead11Props> {}
