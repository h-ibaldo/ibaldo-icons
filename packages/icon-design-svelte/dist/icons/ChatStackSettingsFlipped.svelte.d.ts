import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsFlipped extends SvelteComponent<ChatStackSettingsFlippedProps> {}
