import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCurved: ForwardRefExoticComponent<AtCurvedProps & RefAttributes<Svg>>;

export default AtCurved;
export { AtCurved };
