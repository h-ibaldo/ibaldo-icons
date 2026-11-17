import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleLayered: ForwardRefExoticComponent<ChatStackTriangleLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleLayered;
export { ChatStackTriangleLayered };
