import { SvelteComponent } from 'svelte';

export interface UserFaceCurlyTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceCurlyTop extends SvelteComponent<UserFaceCurlyTopProps> {}
