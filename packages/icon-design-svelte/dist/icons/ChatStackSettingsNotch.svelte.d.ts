import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsNotch extends SvelteComponent<ChatStackSettingsNotchProps> {}
