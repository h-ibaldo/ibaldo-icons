import type { DefineComponent } from 'vue';

export interface CloudLinkVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLinkVertical: DefineComponent<CloudLinkVerticalProps>;

export default CloudLinkVertical;
export { CloudLinkVertical };
