import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCircleWide: ForwardRefExoticComponent<ChatMinusCircleWideProps & RefAttributes<Svg>>;

export default ChatMinusCircleWide;
export { ChatMinusCircleWide };
