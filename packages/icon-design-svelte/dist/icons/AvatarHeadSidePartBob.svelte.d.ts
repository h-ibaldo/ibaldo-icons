import { SvelteComponent } from 'svelte';

export interface AvatarHeadSidePartBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSidePartBob extends SvelteComponent<AvatarHeadSidePartBobProps> {}
