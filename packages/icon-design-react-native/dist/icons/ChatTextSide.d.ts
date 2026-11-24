import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextSide: ForwardRefExoticComponent<ChatTextSideProps & RefAttributes<Svg>>;

export default ChatTextSide;
export { ChatTextSide };
