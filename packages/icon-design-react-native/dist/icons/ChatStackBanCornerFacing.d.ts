import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerFacing: ForwardRefExoticComponent<ChatStackBanCornerFacingProps & RefAttributes<Svg>>;

export default ChatStackBanCornerFacing;
export { ChatStackBanCornerFacing };
