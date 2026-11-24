import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsWide: ForwardRefExoticComponent<ChatDotsWideProps & RefAttributes<Svg>>;

export default ChatDotsWide;
export { ChatDotsWide };
