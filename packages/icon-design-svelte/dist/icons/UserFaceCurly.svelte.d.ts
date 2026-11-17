import { SvelteComponent } from 'svelte';

export interface UserFaceCurlyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceCurly extends SvelteComponent<UserFaceCurlyProps> {}
