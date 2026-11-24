import { SvelteComponent } from 'svelte';

export interface ChatStackCheckCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckCircleFlipped extends SvelteComponent<ChatStackCheckCircleFlippedProps> {}
