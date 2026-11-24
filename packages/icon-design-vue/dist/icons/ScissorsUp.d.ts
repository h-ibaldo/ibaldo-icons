import type { DefineComponent } from 'vue';

export interface ScissorsUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ScissorsUp: DefineComponent<ScissorsUpProps>;

export default ScissorsUp;
export { ScissorsUp };
