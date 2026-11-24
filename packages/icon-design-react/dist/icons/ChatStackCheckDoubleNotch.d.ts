import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleNotch: ForwardRefExoticComponent<ChatStackCheckDoubleNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleNotch;
export { ChatStackCheckDoubleNotch };
