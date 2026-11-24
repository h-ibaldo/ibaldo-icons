import { SvelteComponent } from 'svelte';

export interface ChatStackForwardFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardFacing extends SvelteComponent<ChatStackForwardFacingProps> {}
