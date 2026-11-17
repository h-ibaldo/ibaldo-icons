import { SvelteComponent } from 'svelte';

export interface ChatStackInfoCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoCircleFlipped extends SvelteComponent<ChatStackInfoCircleFlippedProps> {}
