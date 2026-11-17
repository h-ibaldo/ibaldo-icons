import { SvelteComponent } from 'svelte';

export interface AvatarFaceTopKnotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceTopKnot extends SvelteComponent<AvatarFaceTopKnotProps> {}
