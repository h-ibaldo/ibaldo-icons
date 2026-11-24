import { SvelteComponent } from 'svelte';

export interface CheckboxCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCompact extends SvelteComponent<CheckboxCompactProps> {}
