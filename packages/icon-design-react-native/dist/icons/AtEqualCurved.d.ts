import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtEqualCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtEqualCurved: ForwardRefExoticComponent<AtEqualCurvedProps & RefAttributes<Svg>>;

export default AtEqualCurved;
export { AtEqualCurved };
