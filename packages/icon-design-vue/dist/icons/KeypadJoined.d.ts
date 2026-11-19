import type { DefineComponent } from 'vue';

export interface KeypadJoinedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const KeypadJoined: DefineComponent<KeypadJoinedProps>;

export default KeypadJoined;
export { KeypadJoined };
