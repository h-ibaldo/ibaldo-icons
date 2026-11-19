import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbUpFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbUpFingers: ForwardRefExoticComponent<HandThumbUpFingersProps & RefAttributes<Svg>>;

export default HandThumbUpFingers;
export { HandThumbUpFingers };
