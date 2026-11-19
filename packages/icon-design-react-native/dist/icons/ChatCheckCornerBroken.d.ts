import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckCornerBroken: ForwardRefExoticComponent<ChatCheckCornerBrokenProps & RefAttributes<Svg>>;

export default ChatCheckCornerBroken;
export { ChatCheckCornerBroken };
