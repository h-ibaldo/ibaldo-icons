import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkXSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkXSlanted: ForwardRefExoticComponent<LinkXSlantedProps & RefAttributes<Svg>>;

export default LinkXSlanted;
export { LinkXSlanted };
