import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleWide: ForwardRefExoticComponent<ChatXDoubleWideProps & RefAttributes<Svg>>;

export default ChatXDoubleWide;
export { ChatXDoubleWide };
