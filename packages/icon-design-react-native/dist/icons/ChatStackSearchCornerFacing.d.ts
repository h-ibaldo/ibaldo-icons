import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerFacing: ForwardRefExoticComponent<ChatStackSearchCornerFacingProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerFacing;
export { ChatStackSearchCornerFacing };
