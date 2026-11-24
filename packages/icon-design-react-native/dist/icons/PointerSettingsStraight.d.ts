import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerSettingsStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerSettingsStraight: ForwardRefExoticComponent<PointerSettingsStraightProps & RefAttributes<Svg>>;

export default PointerSettingsStraight;
export { PointerSettingsStraight };
