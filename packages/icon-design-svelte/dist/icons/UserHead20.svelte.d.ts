import { SvelteComponent } from 'svelte';

export interface UserHead20Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead20 extends SvelteComponent<UserHead20Props> {}
