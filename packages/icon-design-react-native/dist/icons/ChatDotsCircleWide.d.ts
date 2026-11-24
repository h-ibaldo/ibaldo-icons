import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsCircleWide: ForwardRefExoticComponent<ChatDotsCircleWideProps & RefAttributes<Svg>>;

export default ChatDotsCircleWide;
export { ChatDotsCircleWide };
