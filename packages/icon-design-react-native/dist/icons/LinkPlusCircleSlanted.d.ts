import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkPlusCircleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkPlusCircleSlanted: ForwardRefExoticComponent<LinkPlusCircleSlantedProps & RefAttributes<Svg>>;

export default LinkPlusCircleSlanted;
export { LinkPlusCircleSlanted };
