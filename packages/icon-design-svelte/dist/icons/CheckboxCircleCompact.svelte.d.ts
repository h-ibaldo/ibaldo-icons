import { SvelteComponent } from 'svelte';

export interface CheckboxCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCircleCompact extends SvelteComponent<CheckboxCircleCompactProps> {}
