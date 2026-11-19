import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerBroken: ForwardRefExoticComponent<ChatPlusCornerBrokenProps & RefAttributes<Svg>>;

export default ChatPlusCornerBroken;
export { ChatPlusCornerBroken };
