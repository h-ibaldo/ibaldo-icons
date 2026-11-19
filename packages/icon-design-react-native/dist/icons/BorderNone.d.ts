import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BorderNoneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BorderNone: ForwardRefExoticComponent<BorderNoneProps & RefAttributes<Svg>>;

export default BorderNone;
export { BorderNone };
