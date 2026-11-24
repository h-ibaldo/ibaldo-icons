import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusCircleSharp: ForwardRefExoticComponent<ChatMinusCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusCircleSharp;
export { ChatMinusCircleSharp };
