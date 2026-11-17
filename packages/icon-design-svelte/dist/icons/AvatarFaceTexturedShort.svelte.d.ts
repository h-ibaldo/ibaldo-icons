import { SvelteComponent } from 'svelte';

export interface AvatarFaceTexturedShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceTexturedShort extends SvelteComponent<AvatarFaceTexturedShortProps> {}
