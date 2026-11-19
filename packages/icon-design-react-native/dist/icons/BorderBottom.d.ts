import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderBottom: ForwardRefExoticComponent<BorderBottomProps & RefAttributes<Svg>>;

export default BorderBottom;
export { BorderBottom };
