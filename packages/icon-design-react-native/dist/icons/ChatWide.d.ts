import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatWide: ForwardRefExoticComponent<ChatWideProps & RefAttributes<Svg>>;

export default ChatWide;
export { ChatWide };
