import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoSharp: ForwardRefExoticComponent<ChatInfoSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoSharp;
export { ChatInfoSharp };
