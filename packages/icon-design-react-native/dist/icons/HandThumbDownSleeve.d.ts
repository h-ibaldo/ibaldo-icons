import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandThumbDownSleeveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandThumbDownSleeve: ForwardRefExoticComponent<HandThumbDownSleeveProps & RefAttributes<Svg>>;

export default HandThumbDownSleeve;
export { HandThumbDownSleeve };
