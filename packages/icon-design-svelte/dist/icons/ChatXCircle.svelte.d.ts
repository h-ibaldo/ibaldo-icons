import { SvelteComponent } from 'svelte';

export interface ChatXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircle extends SvelteComponent<ChatXCircleProps> {}
