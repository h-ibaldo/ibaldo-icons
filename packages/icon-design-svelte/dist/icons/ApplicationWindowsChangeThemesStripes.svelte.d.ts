import { SvelteComponent } from 'svelte';

export interface ApplicationWindowsChangeThemesStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowsChangeThemesStripes extends SvelteComponent<ApplicationWindowsChangeThemesStripesProps> {}
