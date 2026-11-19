import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbUpCuffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbUpCuff: ForwardRefExoticComponent<HandThumbUpCuffProps & RefAttributes<Svg>>;

export default HandThumbUpCuff;
export { HandThumbUpCuff };
