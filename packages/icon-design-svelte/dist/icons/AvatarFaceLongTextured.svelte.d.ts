import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongTexturedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongTextured extends SvelteComponent<AvatarFaceLongTexturedProps> {}
