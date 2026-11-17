import { SvelteComponent } from 'svelte';

export interface UserFaceSwoopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSwoop extends SvelteComponent<UserFaceSwoopProps> {}
