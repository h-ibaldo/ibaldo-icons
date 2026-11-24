import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardBoxy: ForwardRefExoticComponent<ChatForwardBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardBoxy;
export { ChatForwardBoxy };
