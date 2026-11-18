import { SvelteComponent } from 'svelte';

export interface ChatAlertBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertBoxy extends SvelteComponent<ChatAlertBoxyProps> {}
