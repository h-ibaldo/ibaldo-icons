import type { DefineComponent } from 'vue';

export interface WifiEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WifiEdit: DefineComponent<WifiEditProps>;

export default WifiEdit;
export { WifiEdit };
