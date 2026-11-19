import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePlusLinkClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePlusLinkClip: ForwardRefExoticComponent<SquarePlusLinkClipProps & RefAttributes<Svg>>;

export default SquarePlusLinkClip;
export { SquarePlusLinkClip };
