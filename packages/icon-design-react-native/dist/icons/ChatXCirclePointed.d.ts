import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCirclePointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCirclePointed: ForwardRefExoticComponent<ChatXCirclePointedProps & RefAttributes<Svg>>;

export default ChatXCirclePointed;
export { ChatXCirclePointed };
