import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleCornerBroken: ForwardRefExoticComponent<ChatCheckDoubleCornerBrokenProps & RefAttributes<Svg>>;

export default ChatCheckDoubleCornerBroken;
export { ChatCheckDoubleCornerBroken };
