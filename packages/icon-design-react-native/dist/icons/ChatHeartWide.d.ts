import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartWide: ForwardRefExoticComponent<ChatHeartWideProps & RefAttributes<Svg>>;

export default ChatHeartWide;
export { ChatHeartWide };
