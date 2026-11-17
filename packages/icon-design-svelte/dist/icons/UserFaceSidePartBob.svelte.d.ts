import { SvelteComponent } from 'svelte';

export interface UserFaceSidePartBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSidePartBob extends SvelteComponent<UserFaceSidePartBobProps> {}
