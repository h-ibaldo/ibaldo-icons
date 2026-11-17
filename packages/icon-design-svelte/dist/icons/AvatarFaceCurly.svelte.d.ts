import { SvelteComponent } from 'svelte';

export interface AvatarFaceCurlyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceCurly extends SvelteComponent<AvatarFaceCurlyProps> {}
