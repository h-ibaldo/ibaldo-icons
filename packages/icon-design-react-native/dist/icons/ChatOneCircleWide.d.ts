import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOneCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOneCircleWide: ForwardRefExoticComponent<ChatOneCircleWideProps & RefAttributes<Svg>>;

export default ChatOneCircleWide;
export { ChatOneCircleWide };
