import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXWide: ForwardRefExoticComponent<ChatXWideProps & RefAttributes<Svg>>;

export default ChatXWide;
export { ChatXWide };
