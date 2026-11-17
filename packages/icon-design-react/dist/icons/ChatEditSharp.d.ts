import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditSharp: ForwardRefExoticComponent<ChatEditSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatEditSharp;
export { ChatEditSharp };
