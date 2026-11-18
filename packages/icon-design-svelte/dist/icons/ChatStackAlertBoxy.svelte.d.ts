import { SvelteComponent } from 'svelte';

export interface ChatStackAlertBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertBoxy extends SvelteComponent<ChatStackAlertBoxyProps> {}
