import { SvelteComponent } from 'svelte';

export interface ChatStackClockFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockFacing extends SvelteComponent<ChatStackClockFacingProps> {}
