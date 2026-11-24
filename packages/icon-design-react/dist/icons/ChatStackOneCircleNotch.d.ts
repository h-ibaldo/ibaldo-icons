import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircleNotch: ForwardRefExoticComponent<ChatStackOneCircleNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircleNotch;
export { ChatStackOneCircleNotch };
