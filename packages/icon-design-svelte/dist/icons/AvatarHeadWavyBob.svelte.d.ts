import { SvelteComponent } from 'svelte';

export interface AvatarHeadWavyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadWavyBob extends SvelteComponent<AvatarHeadWavyBobProps> {}
