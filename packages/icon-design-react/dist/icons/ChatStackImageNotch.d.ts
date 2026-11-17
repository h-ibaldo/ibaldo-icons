import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageNotch: ForwardRefExoticComponent<ChatStackImageNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageNotch;
export { ChatStackImageNotch };
