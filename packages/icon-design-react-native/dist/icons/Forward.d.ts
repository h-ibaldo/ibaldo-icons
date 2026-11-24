import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ForwardProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Forward: ForwardRefExoticComponent<ForwardProps & RefAttributes<Svg>>;

export default Forward;
export { Forward };
