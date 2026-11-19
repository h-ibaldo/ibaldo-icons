import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowLeftSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowLeftSlanted: ForwardRefExoticComponent<LinkCircleArrowLeftSlantedProps & RefAttributes<Svg>>;

export default LinkCircleArrowLeftSlanted;
export { LinkCircleArrowLeftSlanted };
