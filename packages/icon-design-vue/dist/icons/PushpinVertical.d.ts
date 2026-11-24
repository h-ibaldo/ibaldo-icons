import type { DefineComponent } from 'vue';

export interface PushpinVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PushpinVertical: DefineComponent<PushpinVerticalProps>;

export default PushpinVertical;
export { PushpinVertical };
