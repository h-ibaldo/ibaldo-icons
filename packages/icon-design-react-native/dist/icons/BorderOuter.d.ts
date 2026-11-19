import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderOuterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderOuter: ForwardRefExoticComponent<BorderOuterProps & RefAttributes<Svg>>;

export default BorderOuter;
export { BorderOuter };
