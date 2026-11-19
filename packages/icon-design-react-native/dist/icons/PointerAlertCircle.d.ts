import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerAlertCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerAlertCircle: ForwardRefExoticComponent<PointerAlertCircleProps & RefAttributes<Svg>>;

export default PointerAlertCircle;
export { PointerAlertCircle };
