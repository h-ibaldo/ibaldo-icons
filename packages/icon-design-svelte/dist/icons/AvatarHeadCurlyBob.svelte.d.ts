import { SvelteComponent } from 'svelte';

export interface AvatarHeadCurlyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadCurlyBob extends SvelteComponent<AvatarHeadCurlyBobProps> {}
