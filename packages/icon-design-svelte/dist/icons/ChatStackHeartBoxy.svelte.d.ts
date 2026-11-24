import { SvelteComponent } from 'svelte';

export interface ChatStackHeartBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartBoxy extends SvelteComponent<ChatStackHeartBoxyProps> {}
