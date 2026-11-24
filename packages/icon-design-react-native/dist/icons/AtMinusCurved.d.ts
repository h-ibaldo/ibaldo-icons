import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtMinusCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtMinusCurved: ForwardRefExoticComponent<AtMinusCurvedProps & RefAttributes<Svg>>;

export default AtMinusCurved;
export { AtMinusCurved };
