import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextWideSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextWideSide: ForwardRefExoticComponent<ChatTextWideSideProps & RefAttributes<Svg>>;

export default ChatTextWideSide;
export { ChatTextWideSide };
