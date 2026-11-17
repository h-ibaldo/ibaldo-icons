import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertSlant: ForwardRefExoticComponent<ChatStackAlertSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertSlant;
export { ChatStackAlertSlant };
