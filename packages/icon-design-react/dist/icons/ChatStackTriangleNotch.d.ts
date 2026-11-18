import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleNotch: ForwardRefExoticComponent<ChatStackTriangleNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleNotch;
export { ChatStackTriangleNotch };
