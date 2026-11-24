import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerSlant: ForwardRefExoticComponent<ChatStackBanCornerSlantProps & RefAttributes<Svg>>;

export default ChatStackBanCornerSlant;
export { ChatStackBanCornerSlant };
