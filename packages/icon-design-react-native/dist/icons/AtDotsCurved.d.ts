import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtDotsCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtDotsCurved: ForwardRefExoticComponent<AtDotsCurvedProps & RefAttributes<Svg>>;

export default AtDotsCurved;
export { AtDotsCurved };
