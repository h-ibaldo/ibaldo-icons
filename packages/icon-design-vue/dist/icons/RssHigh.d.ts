import type { DefineComponent } from 'vue';

export interface RssHighProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RssHigh: DefineComponent<RssHighProps>;

export default RssHigh;
export { RssHigh };
