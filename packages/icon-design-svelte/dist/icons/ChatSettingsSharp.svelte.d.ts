import { SvelteComponent } from 'svelte';

export interface ChatSettingsSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsSharp extends SvelteComponent<ChatSettingsSharpProps> {}
