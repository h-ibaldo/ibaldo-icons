import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusCircle: ForwardRefExoticComponent<MinusCircleProps & RefAttributes<Svg>>;

export default MinusCircle;
export { MinusCircle };
