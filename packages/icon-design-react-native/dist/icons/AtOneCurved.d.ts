import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtOneCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtOneCurved: ForwardRefExoticComponent<AtOneCurvedProps & RefAttributes<Svg>>;

export default AtOneCurved;
export { AtOneCurved };
