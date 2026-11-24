import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartLayered: ForwardRefExoticComponent<ChatStackHeartLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartLayered;
export { ChatStackHeartLayered };
