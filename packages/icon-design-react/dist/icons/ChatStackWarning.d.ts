import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarning: ForwardRefExoticComponent<ChatStackWarningProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarning;
export { ChatStackWarning };
