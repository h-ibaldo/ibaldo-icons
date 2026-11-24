import { SvelteComponent } from 'svelte';

export interface ChatStackMinusCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusCircleFlipped extends SvelteComponent<ChatStackMinusCircleFlippedProps> {}
