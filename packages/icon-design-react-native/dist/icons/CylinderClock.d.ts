import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CylinderClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CylinderClock: ForwardRefExoticComponent<CylinderClockProps & RefAttributes<Svg>>;

export default CylinderClock;
export { CylinderClock };
