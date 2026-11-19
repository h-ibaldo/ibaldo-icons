import type { DefineComponent } from 'vue';

export interface WindowLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowLink: DefineComponent<WindowLinkProps>;

export default WindowLink;
export { WindowLink };
