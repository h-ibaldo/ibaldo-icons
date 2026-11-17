import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCircleSharp: ForwardRefExoticComponent<ChatXCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatXCircleSharp;
export { ChatXCircleSharp };
