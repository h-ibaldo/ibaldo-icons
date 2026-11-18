import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleSlant: ForwardRefExoticComponent<ChatStackTriangleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleSlant;
export { ChatStackTriangleSlant };
