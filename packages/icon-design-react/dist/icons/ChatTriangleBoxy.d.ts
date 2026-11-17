import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleBoxy: ForwardRefExoticComponent<ChatTriangleBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleBoxy;
export { ChatTriangleBoxy };
