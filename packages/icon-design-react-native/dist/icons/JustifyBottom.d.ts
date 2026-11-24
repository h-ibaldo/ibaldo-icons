import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JustifyBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const JustifyBottom: ForwardRefExoticComponent<JustifyBottomProps & RefAttributes<Svg>>;

export default JustifyBottom;
export { JustifyBottom };
