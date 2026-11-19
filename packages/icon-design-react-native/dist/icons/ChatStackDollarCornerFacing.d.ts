import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDollarCornerFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDollarCornerFacing: ForwardRefExoticComponent<ChatStackDollarCornerFacingProps & RefAttributes<Svg>>;

export default ChatStackDollarCornerFacing;
export { ChatStackDollarCornerFacing };
