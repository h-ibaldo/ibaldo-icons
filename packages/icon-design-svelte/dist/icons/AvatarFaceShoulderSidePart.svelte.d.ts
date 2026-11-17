import { SvelteComponent } from 'svelte';

export interface AvatarFaceShoulderSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceShoulderSidePart extends SvelteComponent<AvatarFaceShoulderSidePartProps> {}
