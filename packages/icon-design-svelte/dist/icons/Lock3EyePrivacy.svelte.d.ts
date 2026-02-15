import { SvelteComponent } from 'svelte';

export interface Lock3EyePrivacyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3EyePrivacy extends SvelteComponent<Lock3EyePrivacyProps> {}
