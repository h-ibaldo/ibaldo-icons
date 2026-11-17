import { SvelteComponent } from 'svelte';

export interface AvatarFaceTexturedPonytailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceTexturedPonytail extends SvelteComponent<AvatarFaceTexturedPonytailProps> {}
