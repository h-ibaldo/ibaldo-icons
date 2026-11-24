import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerWide: ForwardRefExoticComponent<ChatPlusCornerWideProps & RefAttributes<Svg>>;

export default ChatPlusCornerWide;
export { ChatPlusCornerWide };
