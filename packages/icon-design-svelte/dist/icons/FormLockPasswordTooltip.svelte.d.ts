import { SvelteComponent } from 'svelte';

export interface FormLockPasswordTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormLockPasswordTooltip extends SvelteComponent<FormLockPasswordTooltipProps> {}
