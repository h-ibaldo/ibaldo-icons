import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalWide: ForwardRefExoticComponent<ChatDotsVerticalWideProps & RefAttributes<Svg>>;

export default ChatDotsVerticalWide;
export { ChatDotsVerticalWide };
