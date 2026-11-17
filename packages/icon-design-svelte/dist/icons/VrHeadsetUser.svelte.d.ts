import { SvelteComponent } from 'svelte';

export interface VrHeadsetUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrHeadsetUser extends SvelteComponent<VrHeadsetUserProps> {}
