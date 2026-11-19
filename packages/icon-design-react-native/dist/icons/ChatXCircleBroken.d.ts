import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleBroken: ForwardRefExoticComponent<ChatXCircleBrokenProps & RefAttributes<Svg>>;

export default ChatXCircleBroken;
export { ChatXCircleBroken };
