import { SvelteComponent } from 'svelte';

export interface AvatarFaceBaldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceBald extends SvelteComponent<AvatarFaceBaldProps> {}
