import { SvelteComponent } from 'svelte';

export interface UserHead112Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead112 extends SvelteComponent<UserHead112Props> {}
