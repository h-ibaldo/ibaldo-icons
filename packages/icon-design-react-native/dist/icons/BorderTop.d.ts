import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderTop: ForwardRefExoticComponent<BorderTopProps & RefAttributes<Svg>>;

export default BorderTop;
export { BorderTop };
