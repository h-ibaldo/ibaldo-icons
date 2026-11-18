import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsLayered extends SvelteComponent<ChatStackSettingsLayeredProps> {}
