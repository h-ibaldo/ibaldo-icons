import { SvelteComponent } from 'svelte';

export interface IInformationCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformationCircle1 extends SvelteComponent<IInformationCircle1Props> {}
