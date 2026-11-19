import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsVerticalFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsVerticalFacing: ForwardRefExoticComponent<ChatStackDotsVerticalFacingProps & RefAttributes<Svg>>;

export default ChatStackDotsVerticalFacing;
export { ChatStackDotsVerticalFacing };
