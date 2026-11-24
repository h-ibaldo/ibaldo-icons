import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCornerSharp: ForwardRefExoticComponent<ChatPlusCornerSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCornerSharp;
export { ChatPlusCornerSharp };
