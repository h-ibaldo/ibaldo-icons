import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusSlanted: ForwardRefExoticComponent<LinkPlusSlantedProps & RefAttributes<Svg>>;

export default LinkPlusSlanted;
export { LinkPlusSlanted };
