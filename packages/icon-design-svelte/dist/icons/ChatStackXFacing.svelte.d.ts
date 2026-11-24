import { SvelteComponent } from 'svelte';

export interface ChatStackXFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXFacing extends SvelteComponent<ChatStackXFacingProps> {}
