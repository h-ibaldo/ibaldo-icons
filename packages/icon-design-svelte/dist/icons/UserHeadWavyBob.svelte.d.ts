import { SvelteComponent } from 'svelte';

export interface UserHeadWavyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadWavyBob extends SvelteComponent<UserHeadWavyBobProps> {}
