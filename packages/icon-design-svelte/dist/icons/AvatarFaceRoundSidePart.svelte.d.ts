import { SvelteComponent } from 'svelte';

export interface AvatarFaceRoundSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceRoundSidePart extends SvelteComponent<AvatarFaceRoundSidePartProps> {}
