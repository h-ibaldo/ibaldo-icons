import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleSlant: ForwardRefExoticComponent<ChatTriangleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleSlant;
export { ChatTriangleSlant };
