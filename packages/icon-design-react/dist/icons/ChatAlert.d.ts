import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatAlert: ForwardRefExoticComponent<ChatAlertProps & RefAttributes<SVGSVGElement>>;

export default ChatAlert;
export { ChatAlert };
