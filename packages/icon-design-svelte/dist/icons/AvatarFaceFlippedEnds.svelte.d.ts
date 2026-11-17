import { SvelteComponent } from 'svelte';

export interface AvatarFaceFlippedEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceFlippedEnds extends SvelteComponent<AvatarFaceFlippedEndsProps> {}
