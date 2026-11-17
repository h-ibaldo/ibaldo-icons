import { SvelteComponent } from 'svelte';

export interface AvatarHeadFlatTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadFlatTop extends SvelteComponent<AvatarHeadFlatTopProps> {}
