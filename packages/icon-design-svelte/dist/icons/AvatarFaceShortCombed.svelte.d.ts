import { SvelteComponent } from 'svelte';

export interface AvatarFaceShortCombedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceShortCombed extends SvelteComponent<AvatarFaceShortCombedProps> {}
