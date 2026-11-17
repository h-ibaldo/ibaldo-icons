import { SvelteComponent } from 'svelte';

export interface ChatOneCircleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleSlant extends SvelteComponent<ChatOneCircleSlantProps> {}
