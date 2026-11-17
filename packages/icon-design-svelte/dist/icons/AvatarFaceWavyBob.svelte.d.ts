import { SvelteComponent } from 'svelte';

export interface AvatarFaceWavyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceWavyBob extends SvelteComponent<AvatarFaceWavyBobProps> {}
