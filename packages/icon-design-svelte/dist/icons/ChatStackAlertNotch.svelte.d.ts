import { SvelteComponent } from 'svelte';

export interface ChatStackAlertNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackAlertNotch extends SvelteComponent<ChatStackAlertNotchProps> {}
