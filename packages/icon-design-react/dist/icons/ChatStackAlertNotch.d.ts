import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertNotch: ForwardRefExoticComponent<ChatStackAlertNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertNotch;
export { ChatStackAlertNotch };
