import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughWide: ForwardRefExoticComponent<ChatLaughWideProps & RefAttributes<Svg>>;

export default ChatLaughWide;
export { ChatLaughWide };
