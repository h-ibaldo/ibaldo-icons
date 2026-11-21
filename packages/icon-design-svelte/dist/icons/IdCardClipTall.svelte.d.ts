import { SvelteComponent } from 'svelte';

export interface IdCardClipTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IdCardClipTall extends SvelteComponent<IdCardClipTallProps> {}
