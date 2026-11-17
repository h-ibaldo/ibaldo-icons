import { SvelteComponent } from 'svelte';

export interface ChatXCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleSlant extends SvelteComponent<ChatXCircleSlantProps> {}
