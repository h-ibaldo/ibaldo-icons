import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXDoubleFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXDoubleFacing: ForwardRefExoticComponent<ChatStackXDoubleFacingProps & RefAttributes<Svg>>;

export default ChatStackXDoubleFacing;
export { ChatStackXDoubleFacing };
