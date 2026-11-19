import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReplyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Reply: ForwardRefExoticComponent<ReplyProps & RefAttributes<Svg>>;

export default Reply;
export { Reply };
