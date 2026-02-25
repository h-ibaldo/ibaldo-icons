import { SvelteComponent } from 'svelte';

export interface Lock4EyePrivacyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4EyePrivacy extends SvelteComponent<Lock4EyePrivacyProps> {}
