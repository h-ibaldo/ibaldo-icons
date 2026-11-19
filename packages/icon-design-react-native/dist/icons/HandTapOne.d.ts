import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandTapOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandTapOne: ForwardRefExoticComponent<HandTapOneProps & RefAttributes<Svg>>;

export default HandTapOne;
export { HandTapOne };
