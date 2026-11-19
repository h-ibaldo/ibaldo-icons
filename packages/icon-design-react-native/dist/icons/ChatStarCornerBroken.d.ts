import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerBroken: ForwardRefExoticComponent<ChatStarCornerBrokenProps & RefAttributes<Svg>>;

export default ChatStarCornerBroken;
export { ChatStarCornerBroken };
