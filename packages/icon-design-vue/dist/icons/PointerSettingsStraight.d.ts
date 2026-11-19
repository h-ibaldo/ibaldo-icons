import type { DefineComponent } from 'vue';

export interface PointerSettingsStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerSettingsStraight: DefineComponent<PointerSettingsStraightProps>;

export default PointerSettingsStraight;
export { PointerSettingsStraight };
