import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCircleWide: ForwardRefExoticComponent<ChatCheckCircleWideProps & RefAttributes<Svg>>;

export default ChatCheckCircleWide;
export { ChatCheckCircleWide };
