import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerNotch: ForwardRefExoticComponent<ChatStackBanCornerNotchProps & RefAttributes<Svg>>;

export default ChatStackBanCornerNotch;
export { ChatStackBanCornerNotch };
