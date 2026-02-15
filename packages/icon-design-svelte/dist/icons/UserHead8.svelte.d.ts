import { SvelteComponent } from 'svelte';

export interface UserHead8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHead8 extends SvelteComponent<UserHead8Props> {}
