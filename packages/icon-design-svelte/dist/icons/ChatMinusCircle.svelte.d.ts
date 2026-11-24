import { SvelteComponent } from 'svelte';

export interface ChatMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCircle extends SvelteComponent<ChatMinusCircleProps> {}
