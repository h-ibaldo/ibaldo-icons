import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerHourglassStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerHourglassStraight: ForwardRefExoticComponent<PointerHourglassStraightProps & RefAttributes<Svg>>;

export default PointerHourglassStraight;
export { PointerHourglassStraight };
