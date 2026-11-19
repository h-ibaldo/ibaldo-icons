import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtAlertCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtAlertCurved: ForwardRefExoticComponent<AtAlertCurvedProps & RefAttributes<Svg>>;

export default AtAlertCurved;
export { AtAlertCurved };
