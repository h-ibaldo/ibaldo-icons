import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningSlant: ForwardRefExoticComponent<ChatStackWarningSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningSlant;
export { ChatStackWarningSlant };
