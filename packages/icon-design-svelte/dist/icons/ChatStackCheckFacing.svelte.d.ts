import { SvelteComponent } from 'svelte';

export interface ChatStackCheckFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckFacing extends SvelteComponent<ChatStackCheckFacingProps> {}
