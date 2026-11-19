import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbDownFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbDownFingers: ForwardRefExoticComponent<HandThumbDownFingersProps & RefAttributes<Svg>>;

export default HandThumbDownFingers;
export { HandThumbDownFingers };
