import type { DefineComponent } from 'vue';

export interface CloudSquareSignalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSquareSignal: DefineComponent<CloudSquareSignalProps>;

export default CloudSquareSignal;
export { CloudSquareSignal };
