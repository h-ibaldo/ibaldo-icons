import { SvelteComponent } from 'svelte';

export interface AvatarHeadLongSideSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadLongSideSwept extends SvelteComponent<AvatarHeadLongSideSweptProps> {}
