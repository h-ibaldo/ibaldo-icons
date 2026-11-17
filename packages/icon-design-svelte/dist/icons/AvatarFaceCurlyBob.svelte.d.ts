import { SvelteComponent } from 'svelte';

export interface AvatarFaceCurlyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceCurlyBob extends SvelteComponent<AvatarFaceCurlyBobProps> {}
