import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkSplitCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkSplitCircle: ForwardRefExoticComponent<LinkSplitCircleProps & RefAttributes<Svg>>;

export default LinkSplitCircle;
export { LinkSplitCircle };
