import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkCheckCircleClipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkCheckCircleClip: ForwardRefExoticComponent<LinkCheckCircleClipProps & RefAttributes<Svg>>;

export default LinkCheckCircleClip;
export { LinkCheckCircleClip };
