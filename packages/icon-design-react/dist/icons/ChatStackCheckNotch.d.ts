import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckNotch: ForwardRefExoticComponent<ChatStackCheckNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckNotch;
export { ChatStackCheckNotch };
