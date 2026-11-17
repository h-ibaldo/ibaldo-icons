import { SvelteComponent } from 'svelte';

export interface AvatarFaceSwoopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSwoop extends SvelteComponent<AvatarFaceSwoopProps> {}
