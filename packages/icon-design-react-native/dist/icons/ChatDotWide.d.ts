import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotWide: ForwardRefExoticComponent<ChatDotWideProps & RefAttributes<Svg>>;

export default ChatDotWide;
export { ChatDotWide };
