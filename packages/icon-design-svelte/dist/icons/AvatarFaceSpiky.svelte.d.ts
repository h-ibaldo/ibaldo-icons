import { SvelteComponent } from 'svelte';

export interface AvatarFaceSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSpiky extends SvelteComponent<AvatarFaceSpikyProps> {}
