import type { DefineComponent } from 'vue';

export interface AlarmMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmMinus: DefineComponent<AlarmMinusProps>;

export default AlarmMinus;
export { AlarmMinus };
