import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RadioCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RadioCheck: ForwardRefExoticComponent<RadioCheckProps & RefAttributes<Svg>>;

export default RadioCheck;
export { RadioCheck };
