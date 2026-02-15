import { SvelteComponent } from 'svelte';

export interface UserHead15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead15 extends SvelteComponent<UserHead15Props> {}
