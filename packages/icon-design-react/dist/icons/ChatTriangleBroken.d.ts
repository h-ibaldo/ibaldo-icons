import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleBroken: ForwardRefExoticComponent<ChatTriangleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleBroken;
export { ChatTriangleBroken };
