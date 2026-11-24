import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeartCornerBroken: ForwardRefExoticComponent<ChatStackHeartCornerBrokenProps & RefAttributes<Svg>>;

export default ChatStackHeartCornerBroken;
export { ChatStackHeartCornerBroken };
