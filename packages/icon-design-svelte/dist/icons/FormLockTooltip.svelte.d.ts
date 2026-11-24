import { SvelteComponent } from 'svelte';

export interface FormLockTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormLockTooltip extends SvelteComponent<FormLockTooltipProps> {}
