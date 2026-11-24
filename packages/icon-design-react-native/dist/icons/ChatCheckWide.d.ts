import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckWide: ForwardRefExoticComponent<ChatCheckWideProps & RefAttributes<Svg>>;

export default ChatCheckWide;
export { ChatCheckWide };
