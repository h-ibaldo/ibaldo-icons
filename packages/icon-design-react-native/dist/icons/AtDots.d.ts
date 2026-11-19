import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtDots: ForwardRefExoticComponent<AtDotsProps & RefAttributes<Svg>>;

export default AtDots;
export { AtDots };
