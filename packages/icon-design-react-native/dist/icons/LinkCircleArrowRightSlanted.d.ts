import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowRightSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowRightSlanted: ForwardRefExoticComponent<LinkCircleArrowRightSlantedProps & RefAttributes<Svg>>;

export default LinkCircleArrowRightSlanted;
export { LinkCircleArrowRightSlanted };
