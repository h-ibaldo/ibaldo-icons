import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackWarningNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackWarningNotch: ForwardRefExoticComponent<ChatStackWarningNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackWarningNotch;
export { ChatStackWarningNotch };
