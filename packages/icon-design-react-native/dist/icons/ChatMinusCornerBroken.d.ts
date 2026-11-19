import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerBroken: ForwardRefExoticComponent<ChatMinusCornerBrokenProps & RefAttributes<Svg>>;

export default ChatMinusCornerBroken;
export { ChatMinusCornerBroken };
