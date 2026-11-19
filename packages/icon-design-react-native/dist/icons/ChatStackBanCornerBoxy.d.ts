import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerBoxy: ForwardRefExoticComponent<ChatStackBanCornerBoxyProps & RefAttributes<Svg>>;

export default ChatStackBanCornerBoxy;
export { ChatStackBanCornerBoxy };
