import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCircleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCircleClip: ForwardRefExoticComponent<LinkMinusCircleClipProps & RefAttributes<Svg>>;

export default LinkMinusCircleClip;
export { LinkMinusCircleClip };
