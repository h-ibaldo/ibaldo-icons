import type { DefineComponent } from 'vue';

export interface CloudLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLink: DefineComponent<CloudLinkProps>;

export default CloudLink;
export { CloudLink };
