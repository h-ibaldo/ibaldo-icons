import { SvelteComponent } from 'svelte';

export interface UserFaceCurlyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceCurlyBob extends SvelteComponent<UserFaceCurlyBobProps> {}
