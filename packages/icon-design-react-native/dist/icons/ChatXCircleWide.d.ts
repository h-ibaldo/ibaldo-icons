import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleWide: ForwardRefExoticComponent<ChatXCircleWideProps & RefAttributes<Svg>>;

export default ChatXCircleWide;
export { ChatXCircleWide };
