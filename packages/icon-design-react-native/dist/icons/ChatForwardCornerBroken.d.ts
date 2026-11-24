import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatForwardCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatForwardCornerBroken: ForwardRefExoticComponent<ChatForwardCornerBrokenProps & RefAttributes<Svg>>;

export default ChatForwardCornerBroken;
export { ChatForwardCornerBroken };
