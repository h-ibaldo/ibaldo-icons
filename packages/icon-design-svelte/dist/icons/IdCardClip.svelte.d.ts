import { SvelteComponent } from 'svelte';

export interface IdCardClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IdCardClip extends SvelteComponent<IdCardClipProps> {}
