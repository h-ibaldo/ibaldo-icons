import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtAlertCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtAlertCircle: ForwardRefExoticComponent<AtAlertCircleProps & RefAttributes<Svg>>;

export default AtAlertCircle;
export { AtAlertCircle };
