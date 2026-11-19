import type { DefineComponent } from 'vue';

export interface KeyRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeyRight: DefineComponent<KeyRightProps>;

export default KeyRight;
export { KeyRight };
