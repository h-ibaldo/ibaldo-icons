import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsCursorFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsCursorFacing: ForwardRefExoticComponent<ChatStackDotsCursorFacingProps & RefAttributes<Svg>>;

export default ChatStackDotsCursorFacing;
export { ChatStackDotsCursorFacing };
