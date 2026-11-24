import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningSlant: ForwardRefExoticComponent<ChatWarningSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningSlant;
export { ChatWarningSlant };
