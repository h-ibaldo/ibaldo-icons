import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePlusLinkSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePlusLinkSlanted: ForwardRefExoticComponent<SquarePlusLinkSlantedProps & RefAttributes<Svg>>;

export default SquarePlusLinkSlanted;
export { SquarePlusLinkSlanted };
