import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlert: ForwardRefExoticComponent<ChatStackAlertProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlert;
export { ChatStackAlert };
