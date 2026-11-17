import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappySharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappySharp: ForwardRefExoticComponent<ChatHappySharpProps & RefAttributes<SVGSVGElement>>;

export default ChatHappySharp;
export { ChatHappySharp };
