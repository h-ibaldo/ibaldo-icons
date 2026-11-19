import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderHorizontal: ForwardRefExoticComponent<BorderHorizontalProps & RefAttributes<Svg>>;

export default BorderHorizontal;
export { BorderHorizontal };
