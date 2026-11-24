import type { DefineComponent } from 'vue';

export interface PlaqueTightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlaqueTight: DefineComponent<PlaqueTightProps>;

export default PlaqueTight;
export { PlaqueTight };
