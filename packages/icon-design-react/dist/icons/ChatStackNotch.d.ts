import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackNotch: ForwardRefExoticComponent<ChatStackNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackNotch;
export { ChatStackNotch };
