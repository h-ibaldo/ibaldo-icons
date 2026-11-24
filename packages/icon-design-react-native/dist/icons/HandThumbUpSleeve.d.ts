import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbUpSleeveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbUpSleeve: ForwardRefExoticComponent<HandThumbUpSleeveProps & RefAttributes<Svg>>;

export default HandThumbUpSleeve;
export { HandThumbUpSleeve };
