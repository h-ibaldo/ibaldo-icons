import { SvelteComponent } from 'svelte';

export interface ChatStackInfoFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoFacing extends SvelteComponent<ChatStackInfoFacingProps> {}
