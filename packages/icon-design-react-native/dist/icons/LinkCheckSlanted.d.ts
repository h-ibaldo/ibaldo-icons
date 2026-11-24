import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckSlanted: ForwardRefExoticComponent<LinkCheckSlantedProps & RefAttributes<Svg>>;

export default LinkCheckSlanted;
export { LinkCheckSlanted };
