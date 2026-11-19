import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatSunWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatSunWide: ForwardRefExoticComponent<ChatSunWideProps & RefAttributes<Svg>>;

export default ChatSunWide;
export { ChatSunWide };
