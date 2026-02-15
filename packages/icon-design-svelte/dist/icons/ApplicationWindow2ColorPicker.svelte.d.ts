import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2ColorPickerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2ColorPicker extends SvelteComponent<ApplicationWindow2ColorPickerProps> {}
