import { SvelteComponent } from 'svelte';

export interface ChatStackImageSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageSlant extends SvelteComponent<ChatStackImageSlantProps> {}
