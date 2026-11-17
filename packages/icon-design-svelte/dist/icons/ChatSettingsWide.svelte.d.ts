import { SvelteComponent } from 'svelte';

export interface ChatSettingsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSettingsWide extends SvelteComponent<ChatSettingsWideProps> {}
