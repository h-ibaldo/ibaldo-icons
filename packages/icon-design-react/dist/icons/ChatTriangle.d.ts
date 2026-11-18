import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangle: ForwardRefExoticComponent<ChatTriangleProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangle;
export { ChatTriangle };
