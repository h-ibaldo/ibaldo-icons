import { SvelteComponent } from 'svelte';

export interface ChatStackPlusCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusCircleFlipped extends SvelteComponent<ChatStackPlusCircleFlippedProps> {}
