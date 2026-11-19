import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBanCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBanCornerWide: ForwardRefExoticComponent<ChatBanCornerWideProps & RefAttributes<Svg>>;

export default ChatBanCornerWide;
export { ChatBanCornerWide };
