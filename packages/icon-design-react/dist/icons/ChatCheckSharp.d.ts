import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckSharp: ForwardRefExoticComponent<ChatCheckSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckSharp;
export { ChatCheckSharp };
