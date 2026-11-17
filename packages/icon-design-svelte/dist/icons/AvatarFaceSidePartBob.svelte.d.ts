import { SvelteComponent } from 'svelte';

export interface AvatarFaceSidePartBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSidePartBob extends SvelteComponent<AvatarFaceSidePartBobProps> {}
