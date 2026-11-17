import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineTypingFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineTypingFacing: ForwardRefExoticComponent<ChatStackUnderlineTypingFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineTypingFacing;
export { ChatStackUnderlineTypingFacing };
