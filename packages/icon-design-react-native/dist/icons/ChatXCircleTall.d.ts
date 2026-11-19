import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleTall: ForwardRefExoticComponent<ChatXCircleTallProps & RefAttributes<Svg>>;

export default ChatXCircleTall;
export { ChatXCircleTall };
