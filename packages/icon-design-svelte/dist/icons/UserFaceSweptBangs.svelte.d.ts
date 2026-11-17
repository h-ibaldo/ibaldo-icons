import { SvelteComponent } from 'svelte';

export interface UserFaceSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSweptBangs extends SvelteComponent<UserFaceSweptBangsProps> {}
