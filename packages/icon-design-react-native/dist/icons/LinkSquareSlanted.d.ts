import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSquareSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSquareSlanted: ForwardRefExoticComponent<LinkSquareSlantedProps & RefAttributes<Svg>>;

export default LinkSquareSlanted;
export { LinkSquareSlanted };
