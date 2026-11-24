import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCheckCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCheckCurved: ForwardRefExoticComponent<AtCheckCurvedProps & RefAttributes<Svg>>;

export default AtCheckCurved;
export { AtCheckCurved };
