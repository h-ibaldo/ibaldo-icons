import { SvelteComponent } from 'svelte';

export interface ApplicationWindowsThemesStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowsThemesStripes extends SvelteComponent<ApplicationWindowsThemesStripesProps> {}
