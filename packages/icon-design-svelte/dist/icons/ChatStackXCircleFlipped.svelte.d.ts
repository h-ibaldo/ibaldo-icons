import { SvelteComponent } from 'svelte';

export interface ChatStackXCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXCircleFlipped extends SvelteComponent<ChatStackXCircleFlippedProps> {}
