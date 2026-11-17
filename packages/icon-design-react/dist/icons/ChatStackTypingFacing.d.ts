import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingFacing: ForwardRefExoticComponent<ChatStackTypingFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingFacing;
export { ChatStackTypingFacing };
