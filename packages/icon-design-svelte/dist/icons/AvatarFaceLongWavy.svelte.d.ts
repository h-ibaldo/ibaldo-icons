import { SvelteComponent } from 'svelte';

export interface AvatarFaceLongWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceLongWavy extends SvelteComponent<AvatarFaceLongWavyProps> {}
