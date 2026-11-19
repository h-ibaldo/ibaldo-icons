import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkImageSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkImageSlanted: ForwardRefExoticComponent<LinkImageSlantedProps & RefAttributes<Svg>>;

export default LinkImageSlanted;
export { LinkImageSlanted };
