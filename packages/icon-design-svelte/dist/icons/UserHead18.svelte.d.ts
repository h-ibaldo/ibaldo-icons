import { SvelteComponent } from 'svelte';

export interface UserHead18Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead18 extends SvelteComponent<UserHead18Props> {}
