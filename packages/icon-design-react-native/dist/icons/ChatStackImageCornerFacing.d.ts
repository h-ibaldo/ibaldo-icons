import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackImageCornerFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackImageCornerFacing: ForwardRefExoticComponent<ChatStackImageCornerFacingProps & RefAttributes<Svg>>;

export default ChatStackImageCornerFacing;
export { ChatStackImageCornerFacing };
