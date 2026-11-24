import { SvelteComponent } from 'svelte';

export interface AvatarFaceCurlyTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceCurlyTop extends SvelteComponent<AvatarFaceCurlyTopProps> {}
