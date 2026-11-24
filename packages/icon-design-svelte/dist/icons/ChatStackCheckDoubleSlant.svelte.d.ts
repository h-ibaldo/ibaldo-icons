import { SvelteComponent } from 'svelte';

export interface ChatStackCheckDoubleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckDoubleSlant extends SvelteComponent<ChatStackCheckDoubleSlantProps> {}
