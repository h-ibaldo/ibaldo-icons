import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextNotch: ForwardRefExoticComponent<ChatStackTextNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextNotch;
export { ChatStackTextNotch };
