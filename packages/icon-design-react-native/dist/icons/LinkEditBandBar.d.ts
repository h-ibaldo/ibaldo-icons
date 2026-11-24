import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkEditBandBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkEditBandBar: ForwardRefExoticComponent<LinkEditBandBarProps & RefAttributes<Svg>>;

export default LinkEditBandBar;
export { LinkEditBandBar };
