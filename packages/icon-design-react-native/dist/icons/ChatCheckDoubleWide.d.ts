import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleWide: ForwardRefExoticComponent<ChatCheckDoubleWideProps & RefAttributes<Svg>>;

export default ChatCheckDoubleWide;
export { ChatCheckDoubleWide };
