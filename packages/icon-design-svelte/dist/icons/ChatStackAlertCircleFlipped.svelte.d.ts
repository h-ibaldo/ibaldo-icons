import { SvelteComponent } from 'svelte';

export interface ChatStackAlertCircleFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertCircleFlipped extends SvelteComponent<ChatStackAlertCircleFlippedProps> {}
