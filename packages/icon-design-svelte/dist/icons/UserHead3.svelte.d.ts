import { SvelteComponent } from 'svelte';

export interface UserHead3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead3 extends SvelteComponent<UserHead3Props> {}
