import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheck: ForwardRefExoticComponent<BellCheckProps & RefAttributes<Svg>>;

export default BellCheck;
export { BellCheck };
