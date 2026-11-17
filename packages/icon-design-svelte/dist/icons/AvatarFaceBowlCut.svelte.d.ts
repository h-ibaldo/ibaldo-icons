import { SvelteComponent } from 'svelte';

export interface AvatarFaceBowlCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceBowlCut extends SvelteComponent<AvatarFaceBowlCutProps> {}
