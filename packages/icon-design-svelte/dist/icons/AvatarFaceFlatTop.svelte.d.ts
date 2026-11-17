import { SvelteComponent } from 'svelte';

export interface AvatarFaceFlatTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceFlatTop extends SvelteComponent<AvatarFaceFlatTopProps> {}
