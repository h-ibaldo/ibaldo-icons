import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsFacing extends SvelteComponent<ChatStackSettingsFacingProps> {}
