import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCircleArrowRightClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCircleArrowRightClip: ForwardRefExoticComponent<LinkCircleArrowRightClipProps & RefAttributes<Svg>>;

export default LinkCircleArrowRightClip;
export { LinkCircleArrowRightClip };
