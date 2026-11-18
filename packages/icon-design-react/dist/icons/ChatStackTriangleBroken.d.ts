import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTriangleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTriangleBroken: ForwardRefExoticComponent<ChatStackTriangleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTriangleBroken;
export { ChatStackTriangleBroken };
