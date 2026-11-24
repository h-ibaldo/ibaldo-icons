import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatImageCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatImageCornerWide: ForwardRefExoticComponent<ChatImageCornerWideProps & RefAttributes<Svg>>;

export default ChatImageCornerWide;
export { ChatImageCornerWide };
