import { SvelteComponent } from 'svelte';

export interface AvatarHeadLongWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadLongWavy extends SvelteComponent<AvatarHeadLongWavyProps> {}
