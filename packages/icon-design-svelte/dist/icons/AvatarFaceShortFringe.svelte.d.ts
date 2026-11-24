import { SvelteComponent } from 'svelte';

export interface AvatarFaceShortFringeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceShortFringe extends SvelteComponent<AvatarFaceShortFringeProps> {}
