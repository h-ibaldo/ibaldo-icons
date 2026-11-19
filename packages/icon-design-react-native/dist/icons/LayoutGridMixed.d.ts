import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LayoutGridMixedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LayoutGridMixed: ForwardRefExoticComponent<LayoutGridMixedProps & RefAttributes<Svg>>;

export default LayoutGridMixed;
export { LayoutGridMixed };
