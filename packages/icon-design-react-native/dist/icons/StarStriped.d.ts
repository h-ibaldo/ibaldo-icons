import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StarStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StarStriped: ForwardRefExoticComponent<StarStripedProps & RefAttributes<Svg>>;

export default StarStriped;
export { StarStriped };
