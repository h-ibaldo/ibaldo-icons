import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangle: ForwardRefExoticComponent<ChatStackTriangleProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangle;
export { ChatStackTriangle };
