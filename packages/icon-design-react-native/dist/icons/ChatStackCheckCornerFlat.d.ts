import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckCornerFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckCornerFlat: ForwardRefExoticComponent<ChatStackCheckCornerFlatProps & RefAttributes<Svg>>;

export default ChatStackCheckCornerFlat;
export { ChatStackCheckCornerFlat };
