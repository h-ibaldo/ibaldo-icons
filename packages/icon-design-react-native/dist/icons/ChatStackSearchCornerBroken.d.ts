import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackSearchCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackSearchCornerBroken: ForwardRefExoticComponent<ChatStackSearchCornerBrokenProps & RefAttributes<Svg>>;

export default ChatStackSearchCornerBroken;
export { ChatStackSearchCornerBroken };
