import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwatchBookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwatchBook: ForwardRefExoticComponent<SwatchBookProps & RefAttributes<Svg>>;

export default SwatchBook;
export { SwatchBook };
