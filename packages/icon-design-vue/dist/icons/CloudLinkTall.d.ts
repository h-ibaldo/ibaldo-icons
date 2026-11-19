import type { DefineComponent } from 'vue';

export interface CloudLinkTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLinkTall: DefineComponent<CloudLinkTallProps>;

export default CloudLinkTall;
export { CloudLinkTall };
