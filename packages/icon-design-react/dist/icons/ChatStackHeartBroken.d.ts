import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartBroken: ForwardRefExoticComponent<ChatStackHeartBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartBroken;
export { ChatStackHeartBroken };
