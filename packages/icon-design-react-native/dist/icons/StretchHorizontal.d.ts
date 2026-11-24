import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StretchHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StretchHorizontal: ForwardRefExoticComponent<StretchHorizontalProps & RefAttributes<Svg>>;

export default StretchHorizontal;
export { StretchHorizontal };
