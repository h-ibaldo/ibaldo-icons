import { SvelteComponent } from 'svelte';

export interface ChatMinusCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCircleSlant extends SvelteComponent<ChatMinusCircleSlantProps> {}
