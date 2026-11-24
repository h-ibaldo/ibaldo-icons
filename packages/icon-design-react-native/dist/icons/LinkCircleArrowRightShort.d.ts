import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowRightShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowRightShort: ForwardRefExoticComponent<LinkCircleArrowRightShortProps & RefAttributes<Svg>>;

export default LinkCircleArrowRightShort;
export { LinkCircleArrowRightShort };
