import { SvelteComponent } from 'svelte';

export interface ChatStackHeartSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartSlant extends SvelteComponent<ChatStackHeartSlantProps> {}
