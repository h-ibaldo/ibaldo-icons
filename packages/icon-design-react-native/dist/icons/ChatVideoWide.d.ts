import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatVideoWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatVideoWide: ForwardRefExoticComponent<ChatVideoWideProps & RefAttributes<Svg>>;

export default ChatVideoWide;
export { ChatVideoWide };
