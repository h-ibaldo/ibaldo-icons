import { SvelteComponent } from 'svelte';

export interface AvatarFaceTexturedMidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceTexturedMid extends SvelteComponent<AvatarFaceTexturedMidProps> {}
