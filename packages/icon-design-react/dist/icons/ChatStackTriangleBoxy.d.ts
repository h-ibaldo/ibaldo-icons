import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleBoxy: ForwardRefExoticComponent<ChatStackTriangleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleBoxy;
export { ChatStackTriangleBoxy };
