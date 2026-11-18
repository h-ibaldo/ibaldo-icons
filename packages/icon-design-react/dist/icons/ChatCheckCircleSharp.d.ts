import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCircleSharp: ForwardRefExoticComponent<ChatCheckCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCircleSharp;
export { ChatCheckCircleSharp };
