import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerLayeredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerLayered: ForwardRefExoticComponent<ChatStackBanCornerLayeredProps & RefAttributes<Svg>>;

export default ChatStackBanCornerLayered;
export { ChatStackBanCornerLayered };
