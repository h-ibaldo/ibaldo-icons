import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertLayered: ForwardRefExoticComponent<ChatStackAlertLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertLayered;
export { ChatStackAlertLayered };
