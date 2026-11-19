import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlaqueTightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlaqueTight: ForwardRefExoticComponent<PlaqueTightProps & RefAttributes<Svg>>;

export default PlaqueTight;
export { PlaqueTight };
