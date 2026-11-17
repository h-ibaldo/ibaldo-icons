import { SvelteComponent } from 'svelte';

export interface UserFaceWavyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceWavyBob extends SvelteComponent<UserFaceWavyBobProps> {}
