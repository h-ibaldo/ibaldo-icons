import type { DefineComponent } from 'vue';

export interface KeyAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyAngular: DefineComponent<KeyAngularProps>;

export default KeyAngular;
export { KeyAngular };
