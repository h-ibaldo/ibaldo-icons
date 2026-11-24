import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappyWide: ForwardRefExoticComponent<ChatHappyWideProps & RefAttributes<Svg>>;

export default ChatHappyWide;
export { ChatHappyWide };
