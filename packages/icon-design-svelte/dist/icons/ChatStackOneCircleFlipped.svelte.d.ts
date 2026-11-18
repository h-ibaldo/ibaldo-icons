import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleFlipped extends SvelteComponent<ChatStackOneCircleFlippedProps> {}
