import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongSideSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongSideSwept extends SvelteComponent<AvatarFaceLongSideSweptProps> {}
