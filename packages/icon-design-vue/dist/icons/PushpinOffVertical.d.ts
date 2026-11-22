import type { DefineComponent } from 'vue';

export interface PushpinOffVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PushpinOffVertical: DefineComponent<PushpinOffVerticalProps>;

export default PushpinOffVertical;
export { PushpinOffVertical };
