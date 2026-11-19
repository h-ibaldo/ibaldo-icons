import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackForwardFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackForwardFacing: ForwardRefExoticComponent<ChatStackForwardFacingProps & RefAttributes<Svg>>;

export default ChatStackForwardFacing;
export { ChatStackForwardFacing };
