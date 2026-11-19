import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCornerBroken: ForwardRefExoticComponent<ChatXCornerBrokenProps & RefAttributes<Svg>>;

export default ChatXCornerBroken;
export { ChatXCornerBroken };
