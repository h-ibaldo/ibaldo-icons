import { SvelteComponent } from 'svelte';

export interface ChatOneCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircle extends SvelteComponent<ChatOneCircleProps> {}
