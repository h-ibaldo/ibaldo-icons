import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtPlusCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtPlusCurved: ForwardRefExoticComponent<AtPlusCurvedProps & RefAttributes<Svg>>;

export default AtPlusCurved;
export { AtPlusCurved };
