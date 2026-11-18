import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettings extends SvelteComponent<ChatStackSettingsProps> {}
