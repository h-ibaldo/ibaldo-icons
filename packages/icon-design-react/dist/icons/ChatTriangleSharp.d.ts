import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleSharp: ForwardRefExoticComponent<ChatTriangleSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleSharp;
export { ChatTriangleSharp };
