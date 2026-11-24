import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkDotsCircleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkDotsCircleSlanted: ForwardRefExoticComponent<LinkDotsCircleSlantedProps & RefAttributes<Svg>>;

export default LinkDotsCircleSlanted;
export { LinkDotsCircleSlanted };
