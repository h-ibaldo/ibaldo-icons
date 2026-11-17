import { SvelteComponent } from 'svelte';

export interface AvatarFaceTexturedPuffsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceTexturedPuffs extends SvelteComponent<AvatarFaceTexturedPuffsProps> {}
