import { SvelteComponent } from 'svelte';

export interface UserFaceSpaceBunsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSpaceBuns extends SvelteComponent<UserFaceSpaceBunsProps> {}
