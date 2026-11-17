import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircle extends SvelteComponent<ChatStackOneCircleProps> {}
